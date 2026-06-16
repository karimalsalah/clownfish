---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156745-autonomous-smoke"
mode: "autonomous"
run_id: "27597850824"
workflow_run_id: "27597850824"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27597850824"
head_sha: "f28ffb87eae946384c35a92da08de8c8b8ab38e8"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T06:13:26.878Z"
canonical: "https://github.com/openclaw/openclaw/tree/main"
canonical_issue: null
canonical_pr: null
actions_total: 4
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# ghcrawl-156745-autonomous-smoke

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27597850824](https://github.com/openclaw/clownfish/actions/runs/27597850824)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/tree/main

## Summary

All job-provided refs are already closed in the hydrated live preflight artifact, so no GitHub mutations are planned. The obsolete canonical hint #61970 is closed; current main at 6aa83374d90d35226b9cf3577155c3876a91b4b3 contains the WhatsApp outbound media/sendMedia path that matches this regression family, and linked closed issues already cite the shipped v2026.4.10 fix path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 4 |
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
| #61970 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation planned. Current main appears to contain the shipped fix path for the reported WhatsApp outbound media false-success regression. |
| #63169 | keep_closed | skipped | fixed_by_candidate | Already closed after fixed-on-main review; no mutation planned. |
| #63816 | keep_closed | skipped | fixed_by_candidate | Already closed after fixed-on-main review; no mutation planned. |
| #65451 | keep_closed | skipped | fixed_by_candidate | Already closed after fixed-on-main review; no mutation planned. |

## Needs Human

- none
