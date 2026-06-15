import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("tag-clownfish records primary GitHub rate limits as retryable blocks", () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-tag-"));
  const binDir = path.join(tmp, "bin");
  const runDir = path.join(tmp, "run");
  fs.mkdirSync(binDir, { recursive: true });
  fs.mkdirSync(runDir, { recursive: true });
  writeRateLimitedGhStub(binDir);

  fs.writeFileSync(
    path.join(runDir, "result.json"),
    `${JSON.stringify({ repo: "openclaw/openclaw", cluster_id: "tag-rate-limit", mode: "execute", actions: [] }, null, 2)}\n`,
  );
  fs.writeFileSync(
    path.join(runDir, "apply-report.json"),
    `${JSON.stringify({ actions: [{ target: "#123", action: "close_duplicate", status: "executed" }] }, null, 2)}\n`,
  );
  const reportPath = path.join(tmp, "label-report.json");

  const result = spawnSync(
    process.execPath,
    [
      "scripts/tag-clownfish-targets.mjs",
      runDir,
      "--apply",
      "--live",
      "--open-branches",
      "false",
      "--report",
      reportPath,
    ],
    {
      cwd: repoRoot,
      env: {
        ...process.env,
        PATH: `${binDir}${path.delimiter}${process.env.PATH}`,
        CLOWNFISH_ALLOW_EXECUTE: "1",
      },
      encoding: "utf8",
    },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  const report = JSON.parse(fs.readFileSync(reportPath, "utf8"));
  assert.equal(report.totals.blocked, 1);
  assert.equal(report.totals.failed, 0);
  assert.equal(report.targets[0].status, "blocked");
  assert.equal(report.targets[0].retry_recommended, true);
  assert.equal(report.targets[0].transient_error, "github_rate_limit");
});

function writeRateLimitedGhStub(binDir) {
  const ghPath = path.join(binDir, "gh");
  fs.writeFileSync(
    ghPath,
    `#!/usr/bin/env node
process.stderr.write("GraphQL: API rate limit already exceeded for installation ID 127893203.\\n");
process.exit(1);
`,
  );
  fs.chmodSync(ghPath, 0o755);
}
