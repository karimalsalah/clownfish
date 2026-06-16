---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-46-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27626289250"
workflow_run_id: "27626289250"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27626289250"
head_sha: "03ae12ff414fa8b6e93579071c6d374bfc45bbfc"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-16T14:56:18.127Z"
canonical: "https://github.com/openclaw/openclaw/pull/87449"
canonical_issue: "https://github.com/openclaw/openclaw/issues/87322"
canonical_pr: "https://github.com/openclaw/openclaw/pull/87449"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 1
apply_executed: 0
apply_blocked: 0
apply_skipped: 1
needs_human_count: 1
---

# gitcrawl-46-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27626289250](https://github.com/openclaw/clownfish/actions/runs/27626289250)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/87449

## Summary

Open #87449 is the canonical repairable PR for #87322, but it is not merge-ready because the latest ClawSweeper/Codex review failed from infrastructure and merge preflight is incomplete. Plan a repair of the maintainer-editable contributor branch, keep #87322 open until #87449 lands, route only security-sensitive #75256, and send #71569 to a narrow human product/live-repro decision because its remaining final-notification UX issue is distinct from the block-boundary overwrite fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 1 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 1 |
| Needs human | 1 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| execute_fix | blocked |  |  | fix artifact is too broad for autonomous execution; split into narrower jobs or explicitly set CLOWNFISH_ALLOW_BROAD_FIX_ARTIFACTS=1 |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #87322 | close_fixed_by_candidate | skipped | fixed_by_candidate | action status is blocked |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #32868 | keep_closed | skipped | related | Already closed before this run. |
| #47838 | keep_closed | skipped | related | Already merged and closed; no close or merge action is valid. |
| #48522 | keep_closed | skipped | related | Already closed before this run. |
| #70253 | keep_closed | skipped | related | Already closed before this run. |
| #71565 | keep_closed | skipped | superseded | Already closed before this run. |
| #71569 | needs_human | blocked | needs_human | Needs a maintainer product decision and live Mattermost notification proof for the remaining final-notification UX question. |
| #75256 | route_security | planned | security_sensitive | Route the exact security-sensitive ref to central OpenClaw security handling without blocking unrelated non-security classification. |
| #87322 | close_fixed_by_candidate | blocked | fixed_by_candidate | Closeout is clear but blocked on the canonical fix path landing. |
| #87449 | fix_needed | planned | canonical | Repair the contributor branch, run review/validation, and only then merge or block with concrete findings. |
| #91331 | keep_closed | skipped | related | Already merged and closed; no action needed. |
| cluster:gitcrawl-46-autonomous-terminal-gap | build_fix_artifact | planned |  | Produce an executable repair artifact for the canonical contributor PR. |

## Needs Human

- #71569: decide the remaining Mattermost final-notification UX behavior and request/accept live Mattermost notification proof; it is related but not resolved by the #87322/#87449 block-boundary overwrite fix.
