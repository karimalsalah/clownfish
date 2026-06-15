---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238785-dedupe-only-20260429"
mode: "autonomous"
run_id: "25103781376"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103781376"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.357Z"
canonical: "https://github.com/openclaw/openclaw/issues/58890"
canonical_issue: "https://github.com/openclaw/openclaw/issues/58890"
canonical_pr: null
actions_total: 20
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238785-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103781376](https://github.com/openclaw/clownfish/actions/runs/25103781376)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/58890

## Summary

Autonomous dedupe pass only. The hinted representative #57379 is already closed, so it is not a live canonical. #58890 is the closest surviving open canonical for the auto-update restart-handoff subset, but the open items split into several distinct macOS LaunchAgent/gateway subfamilies. No high-confidence close/comment/label mutations are planned; open items are kept because the hydrated artifact shows unique remaining work or recent ClawSweeper keep-open evidence. No security-sensitive refs were detected.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 20 |
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
| #40207 | keep_related | planned | related | Related macOS LaunchAgent startup failure, but not a duplicate of the auto-update restart-handoff family. |
| #46153 | keep_related | planned | related | Related LaunchAgent startup hang with a distinct stdin/launchd root cause; keep open. |
| #53475 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #55880 | keep_related | planned | related | Related to auto-upgrade recovery, but broader than #58890 and not safe to close as a duplicate. |
| #57052 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #57379 | keep_closed | skipped | fixed_by_candidate | Already closed; it cannot be the live canonical for new closeout actions. |
| #58041 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #58306 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #58890 | keep_canonical | planned | canonical | Best surviving canonical for the auto-update restart-handoff subset after #57379 closed. |
| #60885 | keep_related | planned | related | Related to auto-update LaunchAgent downtime, but it has distinct plist lifecycle requirements and should stay open. |
| #65971 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #66390 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #66436 | keep_related | planned | related | Related launchd crash-loop/backoff problem with a distinct missing-config/log-storm reproduction. |
| #67335 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #71060 | keep_related | planned | related | Related LaunchAgent lifecycle issue with remaining stop-side work; not closed by the merged restart repair. |
| #72948 | keep_related | planned | related | Related gateway stop semantics, but independent enough to keep open. |
| #73132 | keep_related | planned | related | Likely same stop-side family as #71060, but unique process-wedging evidence makes duplicate closure too aggressive. |
| #73303 | keep_related | planned | related | Related gateway restart reliability issue with active fresh evidence; keep open. |
| #73520 | keep_related | planned | related | Related update crash-loop issue with distinct stale plugin-runtime-deps cleanup work; keep open. |
| #73673 | keep_related | planned | related | Related to #66436's launchd crash-loop/backoff concern, but broader and not safe to close as a duplicate. |

## Needs Human

- none
