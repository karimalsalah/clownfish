---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-207045-agentic-merge"
mode: "autonomous"
run_id: "25103771352"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103771352"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.354Z"
canonical: "https://github.com/openclaw/openclaw/pull/74007"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/74007"
actions_total: 7
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-207045-agentic-merge

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103771352](https://github.com/openclaw/clownfish/actions/runs/25103771352)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/74007

## Summary

Hydrated state shows the original representative #44319 is already closed and its narrow replacement #74007 has merged, so #74007 is the canonical landed fix for the model-key family. The remaining open refs are not duplicates of that fix: #45395 is a separate draft Grok/xAI strict-field PR, #65909 is a broader Codex native web_search issue, and #46607 is an audio @file implementation PR with a sandbox/path-boundary review finding that should be routed to central security triage. No close, merge, fix PR, or post-merge close action is safe or needed for this cluster pass.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 7 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #74007 | keep_closed | skipped | canonical | Canonical model-key fix already landed; no merge action is needed. |
| #44319 | keep_closed | skipped | fixed_by_candidate | Already closed source PR; covered by merged replacement #74007. |
| #45395 | keep_related | planned | related | Same code area, different provider bug; keep open outside the #74007 model-key canonical path. |
| #46607 | route_security | planned | security_sensitive | Security-shaped sandbox/path-boundary review finding on this PR; quarantine only #46607 and continue classifying unrelated refs. |
| #46601 | keep_closed | skipped | superseded | Historical closed audio issue; no mutation against closed refs. |
| #67843 | keep_closed | skipped | related | Already merged related PR for a separate provider-wrapper context subfamily. |
| #65909 | keep_related | planned | related | Open broader issue with a partial merged fix; not fully covered by #67843 and unrelated to #74007. |

## Needs Human

- none
