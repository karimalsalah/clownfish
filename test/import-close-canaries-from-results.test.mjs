import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import test from "node:test";

const repoRoot = path.resolve(import.meta.dirname, "..");

test("import-close-canaries writes merged PR closeouts as candidate_fix guidance", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "123.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster",
        actions: [
          {
            target: "#84902",
            action: "close_superseded",
            status: "planned",
            canonical: "#74273",
            classification: "superseded",
            reason: "target is already covered by the merged implementation",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const job = fs.readFileSync(path.join(fixture.inbox, "pr-close-canary-84902-test.md"), "utf8");
  assert.match(job, /use candidate_fix rather than canonical/);
  assert.match(job, /prefer `close_fixed_by_candidate` with `candidate_fix: "#74273"`/);
  assert.match(job, /Do not emit `close_superseded` with closed\/merged #74273 in `canonical`/);
});

test("import-close-canaries writes open canonical duplicate closeouts", () => {
  const fixture = makeFixture();
  fs.writeFileSync(
    path.join(fixture.results, "124.json"),
    `${JSON.stringify(
      {
        cluster_id: "source-cluster-open",
        actions: [
          {
            target: "#91955",
            action: "close_duplicate",
            status: "planned",
            canonical: "#91988",
            classification: "duplicate",
            reason: "target is a duplicate of the open canonical issue",
          },
        ],
      },
      null,
      2,
    )}\n`,
  );
  writeFakeGhx(fixture.bin);

  const run = spawnSync(
    process.execPath,
    [
      "scripts/import-close-canaries-from-results.mjs",
      "--results-dir",
      fixture.results,
      "--out",
      fixture.inbox,
      "--existing-dir",
      fixture.existing,
      "--suffix",
      "test",
      "--limit",
      "1",
    ],
    {
      cwd: repoRoot,
      env: { ...process.env, PATH: `${fixture.bin}${path.delimiter}${process.env.PATH ?? ""}` },
      encoding: "utf8",
    },
  );

  assert.equal(run.status, 0, run.stderr || run.stdout);
  const job = fs.readFileSync(path.join(fixture.inbox, "pr-close-canary-91955-test.md"), "utf8");
  assert.match(job, /prefer `close_duplicate` with `canonical: "#91988"`/);
  assert.match(job, /Do not use `candidate_fix` for open canonical refs/);
});

function makeFixture() {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), "clownfish-close-canary-"));
  const results = path.join(root, "results");
  const inbox = path.join(root, "inbox");
  const existing = path.join(root, "existing");
  const bin = path.join(root, "bin");
  fs.mkdirSync(results, { recursive: true });
  fs.mkdirSync(inbox, { recursive: true });
  fs.mkdirSync(existing, { recursive: true });
  fs.mkdirSync(bin, { recursive: true });
  return { root, results, inbox, existing, bin };
}

function writeFakeGhx(bin) {
  const ghx = path.join(bin, "ghx");
  fs.writeFileSync(
    ghx,
    `#!/usr/bin/env node
console.log(JSON.stringify({
  data: {
    repository: {
      n84902: {
        __typename: "PullRequest",
        number: 84902,
        title: "stale provider thinking profile",
        state: "OPEN",
        updatedAt: "2026-06-15T02:05:27Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n74273: {
        __typename: "PullRequest",
        number: 74273,
        title: "merged provider thinking fix",
        state: "MERGED",
        updatedAt: "2026-04-29T10:36:18Z",
        mergedAt: "2026-04-29T10:35:03Z",
        isDraft: false,
        labels: { nodes: [] }
      },
      n91955: {
        __typename: "PullRequest",
        number: 91955,
        title: "duplicate hook regression PR",
        state: "OPEN",
        updatedAt: "2026-06-15T12:00:00Z",
        mergedAt: null,
        isDraft: false,
        labels: { nodes: [] }
      },
      n91988: {
        __typename: "Issue",
        number: 91988,
        title: "canonical hook regression issue",
        state: "OPEN",
        updatedAt: "2026-06-15T12:01:00Z",
        labels: { nodes: [] }
      }
    }
  }
}));
`,
  );
  fs.chmodSync(ghx, 0o755);
}
