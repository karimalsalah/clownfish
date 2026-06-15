import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("queue-status ignores inbox example jobs", () => {
  const fixture = makeFixture();
  writeJob(path.join(fixture.inbox, "autonomous-example.md"), {
    clusterId: "example-autonomous-cron-timeout",
    mode: "autonomous",
    refs: ["#1", "#2"],
  });
  writeJob(path.join(fixture.inbox, "real-close.md"), {
    clusterId: "real-close",
    mode: "execute",
    refs: ["#3", "#4"],
  });

  const result = spawnSync(
    process.execPath,
    [
      "scripts/queue-status.mjs",
      "--inbox",
      fixture.inbox,
      "--runs-dir",
      fixture.runs,
      "--dispatch-ledger",
      fixture.ledger,
      "--skip-secret-check",
      "--json",
    ],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.totals.inbox_jobs, 1);
  assert.equal(payload.totals.missing_execute, 1);
  assert.equal(payload.totals.missing_autonomous, 0);
  assert.deepEqual(payload.rows.map((row) => path.basename(row.path)), ["real-close.md"]);
});

test("prune-inbox preserves example jobs even when writing", () => {
  const fixture = makeFixture();
  const examplePath = path.join(fixture.inbox, "autonomous-example.md");
  writeJob(examplePath, {
    clusterId: "example-autonomous-cron-timeout",
    mode: "autonomous",
    refs: ["#1", "#2"],
  });

  const result = spawnSync(
    process.execPath,
    ["scripts/prune-inbox-jobs.mjs", "--inbox", fixture.inbox, "--live", "false", "--write", "--json"],
    { cwd: repoRoot, encoding: "utf8" },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const payload = JSON.parse(result.stdout);
  assert.equal(payload.summary.example, 1);
  assert.equal(payload.summary.movable, 0);
  assert.equal(payload.rows[0].action, "example");
  assert.equal(payload.rows[0].destination, null);
  assert.equal(fs.existsSync(examplePath), true);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-examples-"));
  const inbox = path.join(root, "inbox");
  const runs = path.join(root, "runs");
  const ledger = path.join(root, "dispatch-ledger.json");
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(runs, { recursive: true });
  fs.writeFileSync(ledger, `${JSON.stringify({ attempts: [] })}\n`);
  return { root, inbox, runs, ledger };
}

function writeJob(filePath, { clusterId, mode, refs }) {
  fs.writeFileSync(
    filePath,
    `---
repo: openclaw/openclaw
cluster_id: ${clusterId}
mode: ${mode}
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - merge
require_human_for:
  - merge
canonical:
  - "${refs[0]}"
candidates:
${refs.map((ref) => `  - "${ref}"`).join("\n")}
cluster_refs:
${refs.map((ref) => `  - "${ref}"`).join("\n")}
security_sensitive: false
---

# Test Job
`,
  );
}
