---
repo: openclaw/openclaw
cluster_id: gitcrawl-37-bulk-plan-20260615-a
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical:
  - "#83187"
candidates:
  - "#75498"
  - "#83184"
  - "#83187"
  - "#84217"
  - "#84238"
  - "#84975"
  - "#85743"
  - "#85770"
  - "#85871"
  - "#88970"
  - "#89115"
  - "#89130"
  - "#90229"
  - "#90855"
cluster_refs:
  - "#75498"
  - "#83184"
  - "#83187"
  - "#84217"
  - "#84238"
  - "#84975"
  - "#85743"
  - "#85770"
  - "#85871"
  - "#88970"
  - "#89115"
  - "#89130"
  - "#90229"
  - "#90855"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84975"
  - "#85770"
  - "#89130"
  - "#90855"
canonical_hint: "gitcrawl representative #83187 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 37 on 2026-06-15. Security-signal refs #84975, #85770, #89130, #90855 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 37

Generated from local gitcrawl run cluster 37 for `openclaw/openclaw`.

Display title:

> fix(heartbeat): clear pendingFinalDelivery* on send success

Cluster shape from gitcrawl:

- total members: 14
- issues: 7
- pull requests: 7
- open candidates in local store: 14
- security-signal refs requiring route_security: #84975, #85770, #89130, #90855
- representative: #83187, currently open in local store
- latest member update: 2026-06-14T04:46:07.320526Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75498 [Bug]: macOS 26.4.1 / 2026.4.29 Telegram Web UI-only replies with partial streaming, polling stall, and session modelOverride pollution
- #83184 [Bug]: Heartbeat-driven agent replies leave pendingFinalDelivery stuck, blocking subsequent heartbeats
- #83187 fix(heartbeat): clear pendingFinalDelivery* on send success
- #84217 [Bug]: Heartbeat dispatch delivers free text block alongside message-tool call (chatty non-Codex providers, v2026.5.18)
- #84238 [Bug]: Telegram final reply stuck in pendingFinalDelivery with attempt=1, lastError=null, no sendMessage
- #84975 [security-signal] fix(heartbeat): suppress fallback after route-matched message tool
- #85743 pendingFinalDelivery heartbeat replay loops forever — no attempt cap or TTL on orphan sessions
- #85770 [security-signal] fix(heartbeat): bound pending final delivery replay
- #85871 [Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23)
- #88970 fix #85871: [Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23)
- #89115 Race in dispatch-from-config: abort check before clearPendingFinalDeliveryAfterSuccess() leaves pendingFinalDelivery stuck after successful delivery
- #89130 [security-signal] fix(auto-reply): clear delivered pending finals
- #90229 fix(auto-reply): clear delivered pending final before abort
- #90855 [security-signal] Recover stale pending final deliveries
