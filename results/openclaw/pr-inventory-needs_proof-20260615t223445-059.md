---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-059"
mode: "plan"
run_id: "27583353899"
workflow_run_id: "27583353899"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353899"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.591Z"
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
needs_human_count: 3
---

# pr-inventory-needs_proof-20260615T223445-059

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353899](https://github.com/openclaw/clownfish/actions/runs/27583353899)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No shared canonical was selected because the job is an inventory shard, not a dedupe cluster. PR #73635 is routed to central security handling because deterministic validation classified it as security-sensitive. No close, merge, fix, or label mutations are planned; all unrelated open PRs are classified conservatively against their own hydrated state.

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
| Needs human | 3 |

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
| #64310 | keep_independent | planned | independent | Useful focused PR, but not merge-ready and not closable under this inventory shard. |
| #65962 | keep_independent | planned | independent | Independent narrow fix remains viable but blocked on proof/review cleanup. |
| #67008 | keep_independent | planned | independent | Provider catalog PR is independent and not ready for closure or merge. |
| #68176 | keep_independent | planned | independent | Independent implementation PR should remain open for proof and validation. |
| #73628 | keep_independent | planned | independent | Useful but broad independent PR; keep open for proof and review rather than close. |
| #73635 | route_security | planned | security_sensitive | Quarantine this exact PR to central OpenClaw security handling; do not close, merge, label, comment, or fix it in this cluster. |
| #75043 | keep_related | planned | related | Keep related to the TTS provider-emotion design family; no canonical close/merge action is safe in this shard. |
| #75065 | keep_related | planned | related | Related successor to prior cron custom-id work; keep open for proof and validation. |
| #75121 | keep_independent | planned | independent | Independent PR can continue after branch refresh; no close action is warranted. |
| #75126 | needs_human | planned | needs_human | Maintainer judgment is needed on whether to continue this broad uneditable branch or ask for a narrower replacement. |
| #75160 | keep_independent | planned | independent | Independent narrow PR should remain open pending proof. |
| #75201 | keep_independent | planned | independent | Independent PR with proof supplied; keep open for normal maintainer review. |
| #75554 | keep_independent | planned | independent | Independent feature/API PR is not a close candidate and is blocked on proof/checks. |
| #83988 | keep_related | planned | related | Related to the TTS final-mode issue family; keep open pending check repair and maintainer review. |
| #89039 | keep_related | planned | related | Related to the session takeover/message-loss bug family; keep open, no merge/close action. |
| #89040 | keep_related | planned | related | Related performance/availability fix remains open for check repair and review. |
| #90690 | keep_independent | planned | independent | Independent app fix should remain open pending proof. |
| #91168 | keep_independent | planned | independent | Independent UI/gateway enhancement remains open for normal review. |
| #91463 | keep_related | planned | related | Related to the hydrated browser bridge issue; keep open as a candidate fix path. |
| #91493 | keep_independent | planned | independent | Independent contract PR remains open but blocked by proof/checks. |
| #91515 | keep_independent | planned | independent | Independent narrow bug fix should stay open for proof and test hardening. |
| #91668 | needs_human | planned | needs_human | Specific maintainer decision needed: choose the canonical stale subagent recovery implementation among active branches. |
| #91680 | keep_related | planned | related | Related to web UI run-status issue; keep open pending proof/check resolution. |
| #91698 | needs_human | planned | needs_human | Specific maintainer decision needed on proof override or sanctioned live verification for Feishu behavior. |
| #91721 | keep_independent | planned | independent | Independent narrow PR remains open for test coverage and review; no closure action is safe. |

## Needs Human

- #75126: decide whether to continue the broad uneditable strict-tool-mode branch after human review requested minimization and cleanup.
- #91668: choose a canonical implementation among multiple active stale subagent recovery branches.
- #91698: decide whether to accept a proof override or run sanctioned live Feishu verification.
