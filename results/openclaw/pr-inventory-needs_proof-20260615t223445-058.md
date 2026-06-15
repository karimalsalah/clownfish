---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-058"
mode: "plan"
run_id: "27583353973"
workflow_run_id: "27583353973"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353973"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-15T23:55:41.602Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-058

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353973](https://github.com/openclaw/clownfish/actions/runs/27583353973)

Workflow conclusion: success

Worker result: needs_human

Canonical: unknown

## Summary

Plan-only PR inventory classification. The shard is not a dedupe cluster, so no canonical was selected. Hydrated non-security PRs are kept independent for normal maintainer proof/review paths; #92394 and #92456 are routed to central security handling per the preflight artifact; refs whose live state was unavailable are blocked for human/refreshed hydration before classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 13 |

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
| #92254 | keep_independent | planned | independent | Unique open PR needing proof, not a duplicate or close candidate in this shard. |
| #92284 | keep_independent | planned | independent | Independent useful PR; keep for maintainer proof/review rather than close. |
| #92298 | keep_independent | planned | independent | Unique open PR needing proof, not a duplicate or close candidate. |
| #92303 | keep_independent | planned | independent | Independent proof-needed PR; no closure or merge action is safe in plan mode. |
| #92342 | keep_independent | planned | independent | Broad draft PR needing maintainer review/proof; not a low-signal close candidate because low-signal closeout is disabled. |
| #92351 | keep_independent | planned | independent | Independent useful PR requiring normal proof/review, not a duplicate or close candidate. |
| #92375 | keep_independent | planned | independent | Independent PR with failing checks/proof blockers; keep rather than close. |
| #92394 | route_security | planned | security_sensitive | Scoped security quarantine required by the artifact. |
| #92456 | route_security | planned | security_sensitive | Scoped security quarantine required by the artifact. |
| #92310 | keep_independent | planned | independent | Independent proof-needed PR; no close/merge path in this shard. |
| #92363 | keep_independent | planned | independent | Independent PR requiring maintainer review/proof. |
| #91549 | keep_independent | planned | independent | Independent proof-needed PR; no shared canonical exists in this inventory shard. |
| #91553 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #93379 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #93328 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #41299 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #50483 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #54692 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #86551 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #60183 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #90931 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #61329 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #61396 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #63375 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |
| #64064 | needs_human | blocked | needs_human | Live target kind/state/updated_at are unavailable, so this candidate needs refreshed hydration before classification. |

## Needs Human

- #91553: live state unavailable from preflight artifact; rerun hydration before classification.
- #93379: live state unavailable from preflight artifact; rerun hydration before classification.
- #93328: live state unavailable from preflight artifact; rerun hydration before classification.
- #41299: live state unavailable from preflight artifact; rerun hydration before classification.
- #50483: live state unavailable from preflight artifact; rerun hydration before classification.
- #54692: live state unavailable from preflight artifact; rerun hydration before classification.
- #86551: live state unavailable from preflight artifact; rerun hydration before classification.
- #60183: live state unavailable from preflight artifact; rerun hydration before classification.
- #90931: live state unavailable from preflight artifact; rerun hydration before classification.
- #61329: live state unavailable from preflight artifact; rerun hydration before classification.
- #61396: live state unavailable from preflight artifact; rerun hydration before classification.
- #63375: live state unavailable from preflight artifact; rerun hydration before classification.
- #64064: live state unavailable from preflight artifact; rerun hydration before classification.
