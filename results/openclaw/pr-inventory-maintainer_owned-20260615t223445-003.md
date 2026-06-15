---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-maintainer_owned-20260615T223445-003"
mode: "plan"
run_id: "27583279076"
workflow_run_id: "27583279076"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583279076"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.201Z"
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
needs_human_count: 0
---

# pr-inventory-maintainer_owned-20260615T223445-003

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583279076](https://github.com/openclaw/clownfish/actions/runs/27583279076)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. Used the provided cluster preflight artifact as live GitHub state. No GitHub mutations are planned: this is not a dedupe cluster, merge/fix actions are blocked, low-signal closeout is disabled, and candidates are either active review items, drafts, blocked by proof/check/review state, or security-routed.

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
| #89912 | keep_related | planned | related | Keep for maintainer review as an active draft PR. |
| #89924 | keep_related | planned | related | Keep as a draft maintainer-owned fix candidate. |
| #89940 | keep_related | planned | related | Keep as an active draft PR. |
| #89945 | keep_related | planned | related | Keep for normal maintainer review. |
| #89946 | keep_related | planned | related | Keep as an active draft candidate. |
| #89948 | keep_related | planned | related | Keep as a draft PR awaiting normal review. |
| #89963 | keep_related | planned | related | Keep as active draft work. |
| #85481 | keep_related | planned | related | Keep for maintainer review; no close or merge action is permitted. |
| #16544 | keep_related | planned | related | Keep open; blocked by proof and dirty mergeability. |
| #72610 | route_security | planned | security_sensitive | Security-sensitive migration/import PR must route to central OpenClaw security handling. |
| #84335 | keep_related | planned | related | Keep as a valid related Slack fix candidate. |
| #78054 | keep_related | planned | related | Keep open; blocked by proof/check state. |
| #78099 | keep_related | planned | related | Keep open for review; not safely closable in this plan shard. |
| #78388 | keep_related | planned | related | Keep for author/maintainer follow-up. |
| #78511 | keep_related | planned | related | Keep as a valid related fix candidate. |
| #78536 | keep_related | planned | related | Keep as draft related Slack work. |
| #64436 | keep_related | planned | related | Keep open; active contributor PR with review blockers. |
| #77774 | keep_related | planned | related | Keep open for maintainer review; not a low-signal close candidate. |
| #89726 | keep_related | planned | related | Keep as active draft work. |
| #89857 | keep_related | planned | related | Keep for author follow-up. |
| #89923 | keep_related | planned | related | Keep as draft maintainer-owned work. |
| #89936 | keep_related | planned | related | Keep as active draft PR. |
| #28081 | keep_related | planned | related | Keep open; blocked by proof/mergeability/review findings. |
| #90102 | keep_related | planned | related | Keep as draft maintainer-owned fix candidate. |
| #90105 | keep_related | planned | related | Keep as active draft work. |
| #64127 | route_security | planned | security_sensitive | Security-sensitive linked PR must route to central OpenClaw security handling. |

## Needs Human

- none
