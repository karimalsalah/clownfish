---
repo: "openclaw/openclaw"
cluster_id: "ghcrawl-156779-identity-source-proof"
mode: "autonomous"
run_id: "27485128688"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27485128688"
head_sha: "1df342c288241955c6abe099acd5ac7e21fbc055"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-14T01:53:03.943Z"
canonical: "https://github.com/openclaw/openclaw/issues/40768"
canonical_issue: "https://github.com/openclaw/openclaw/issues/40768"
canonical_pr: null
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 2
---

# ghcrawl-156779-identity-source-proof

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27485128688](https://github.com/openclaw/clownfish/actions/runs/27485128688)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/40768

## Summary

Blocked the identity-source slice. #40768 remains the canonical open issue and current main is still open_id-only for Feishu bot identity and mention gating, but the hydrated evidence cannot prove a safe fallback identity source. #40782 is not repairable inside this slice until the Feishu bot identity source is proven.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 2 |

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
| #40768 | fix_needed | blocked | canonical | The bug appears real and current-main source-reproducible, but this narrow job cannot prove a safe Feishu bot identity source for a fix PR. |
| #40782 | needs_human | blocked | needs_human | #40782 should stay open for maintainer/contributor follow-up, but Clownfish should not repair or replace it in this slice until the identity source is proven. |
| cluster:ghcrawl-156779-identity-source-proof | build_fix_artifact | blocked | needs_human | A fix artifact that patches matcher/debounce behavior would broaden beyond the requested identity proof, while the available identity API evidence does not prove union_id or another stable fallback. |

## Needs Human

- Confirm the safe Feishu bot identity source for matching WebSocket @mention IDs in multi-bot groups. Current main only probes and stores bot open_id/name, and hydrated contributor evidence says bot/v3/info does not return union_id.
- Decide the path for #40782 after identity proof exists: repair the contributor branch if the proven identity source supports it, or replace it with a narrow credited PR. It currently has maintainer changes requested, failed Real behavior proof, failed check, and unresolved bot review findings.
