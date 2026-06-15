---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T223445-067"
mode: "plan"
run_id: "27583277132"
workflow_run_id: "27583277132"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583277132"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:40.860Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 26
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# pr-inventory-ready_for_maintainer-20260615T223445-067

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583277132](https://github.com/openclaw/clownfish/actions/runs/27583277132)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification only. No shared canonical was selected. Most open PRs are useful independent maintainer-review items, several are blocked by checks or review findings, already-closed PRs are kept closed, and security-shaped refs are routed without mutating GitHub.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 26 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #89816 | keep_independent | planned | independent | Docs PR should remain open for maintainer review; no safe close action. |
| #84794 | keep_independent | planned | independent | Useful independent fix path; keep open. |
| #75961 | keep_independent | planned | independent | Not merge-ready, but not low-signal or superseded. |
| #76811 | keep_independent | planned | independent | Focused useful PR, no close action warranted. |
| #77127 | keep_independent | planned | independent | Keep open; neither duplicate nor safe to close. |
| #77875 | route_security | planned | security_sensitive | Security-sensitive target must be quarantined for central OpenClaw security handling. |
| #77904 | keep_independent | planned | independent | Keep open; needs review/fix before merge, not closure. |
| #78606 | route_security | planned | security_sensitive | Security-sensitive approval-delivery target must be quarantined for central OpenClaw security handling. |
| #78715 | keep_independent | planned | independent | Do not close in this inventory shard; keep for maintainer decision. |
| #78741 | keep_independent | planned | independent | Keep open; failing checks block merge but not classification. |
| #78747 | keep_independent | planned | independent | Keep open for maintainer/review follow-up. |
| #78765 | keep_closed | skipped | independent | Already closed in live state. |
| #78839 | keep_independent | planned | independent | Keep open; not closeable from inventory. |
| #78852 | keep_independent | planned | independent | Keep open for normal maintainer review. |
| #42637 | route_security | planned | security_sensitive | Security-shaped prompt injection evidence appears in hydrated PR discussion. |
| #78884 | keep_independent | planned | independent | Keep open; low-signal closeout is disabled and this has a linked docs gap. |
| #78931 | keep_independent | planned | independent | Keep open; test-only PR is not eligible for closeout in this job. |
| #78964 | keep_independent | planned | independent | Keep open; broad useful PR with failing checks and review blockers. |
| #78966 | keep_closed | skipped | superseded | Already closed as superseded/duplicate; no action. |
| #93055 | needs_human | planned | needs_human | Specific human-review label/merge decision remains outside this plan-mode worker. |
| #79049 | keep_independent | planned | independent | Keep open; not closeable, but failing checks block merge readiness. |
| #90154 | route_security | planned | security_sensitive | Auth-boundary change should be quarantined from backlog-cleanup automation. |
| #77710 | keep_independent | planned | independent | Keep open for maintainer review. |
| #90202 | keep_independent | planned | independent | Keep open; broad feature PR needs normal maintainer review and failing-check follow-up. |
| #77895 | keep_independent | planned | independent | Keep open; review findings and failing checks block merge but not classification. |
| #77877 | route_security | planned | security_sensitive | Exact linked security-sensitive item from preflight artifact. |

## Needs Human

- #93055 has an explicit clawsweeper:human-review label and merge is blocked in this plan-mode job.
