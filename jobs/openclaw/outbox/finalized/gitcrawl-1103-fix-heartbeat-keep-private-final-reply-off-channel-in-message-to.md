---
repo: openclaw/openclaw
cluster_id: gitcrawl-1103-fix-heartbeat-keep-private-final-reply-off-channel-in-message-to
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
canonical: []
candidates:
  - "#94053"
cluster_refs:
  - "#94053"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#73785"
  - "#75469"
  - "#79504"
  - "#81341"
  - "#83184"
  - "#83187"
  - "#84022"
  - "#84217"
  - "#84485"
  - "#84975"
  - "#85743"
  - "#85770"
  - "#85871"
  - "#88898"
  - "#88970"
  - "#89279"
  - "#90855"
  - "#92260"
  - "#92263"
  - "#92356"
  - "#93875"
  - "#93888"
  - "#93906"
  - "#93925"
  - "#93961"
  - "#94031"
  - "#94061"
  - "#94072"
  - "#94087"
  - "#94088"
  - "#94097"
  - "#94111"
  - "#94121"
  - "#94485"
  - "#94486"
  - "#94538"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94088 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1103 on 2026-06-19. Existing-overlap refs #73785, #75469, #79504, #81341, #83184, #83187, #84022, #84217, #84485, #84975, #85743, #85770, #85871, #88898, #88970, #89279, #90855, #92260, #92263, #92356, #93875, #93888, #93906, #93925, #93961, #94031, #94061, #94072, #94087, #94088, #94097, #94111, #94121, #94485, #94486, #94538 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1103

Generated from local gitcrawl run cluster 1103 for `openclaw/openclaw`.

Display title:

> fix(heartbeat): keep private final reply off-channel in message_tool mode

Cluster shape from gitcrawl:

- total members: 37
- issues: 8
- pull requests: 29
- open candidates in local store: 1
- excluded existing-overlap refs: #73785, #75469, #79504, #81341, #83184, #83187, #84022, #84217, #84485, #84975, #85743, #85770, #85871, #88898, #88970, #89279, #90855, #92260, #92263, #92356, #93875, #93888, #93906, #93925, #93961, #94031, #94061, #94072, #94087, #94088, #94097, #94111, #94121, #94485, #94486, #94538
- representative: #94088, currently open in local store
- latest member update: 2026-06-19T02:13:01.228149Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94053 [Bug]: Heartbeat runner leaks private final replies to Telegram in message_tool_only mode

Existing-overlap context refs:

- #73785 fix(heartbeat): suppress no-op system event replies
- #75469 fix: same-session inferred commitments can be starved indefinitely when a normal HEARTBEAT.md...
- #79504 fix(heartbeat): harden commitment check-in delivery
- #81341 [security-signal] [AI-assisted] Fix ACP bound thread follow-up delivery
- #83184 [Bug]: Heartbeat-driven agent replies leave pendingFinalDelivery stuck, blocking subsequent heartbeats
- #83187 fix(heartbeat): clear pendingFinalDelivery* on send success
- #84022 Discord room events can suppress final assistant replies into transcript-only mode
- #84217 [Bug]: Heartbeat dispatch delivers free text block alongside message-tool call (chatty non-Codex providers, v2026.5.18)
- #84485 fix(discord): guard message-tool-only final delivery
- #84975 [security-signal] fix(heartbeat): suppress fallback after route-matched message tool
- #85743 pendingFinalDelivery heartbeat replay loops forever — no attempt cap or TTL on orphan sessions
- #85770 [security-signal] fix(heartbeat): bound pending final delivery replay
- #85871 [Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23)
- #88898 fix(reply): also drop tool-error progress payloads under messages.suppressToolErrors
- #88970 fix #85871: [Bug]: Heartbeat scheduler silently fails to fire on 5.20 and all 5.x versions (regression from 4.23)
- #89279 fix(tasks): deliver ACP completions to bound Discord threads
- #90855 [security-signal] Recover stale pending final deliveries
- #92260 [Bug]: Heartbeat delivers reasoning payload as main reply when includeReasoning is false (resolveHeartbeatReplyPayload ignores isReasoning)
- #92263 Fix heartbeat reasoning payload selection
- #92356 [security-signal] fix(heartbeat): skip reasoning payloads when selecting heartbeat reply
- #93875 [security-signal] [Bug]: Discord message_tool_only turns can append stale tool-failed warning after successful message send
- #93888 fix(discord): count message_tool_only delivery as user-facing reply
- #93906 [security-signal] fix(discord): count message-tool delivery as user-facing reply for error warning
- #93925 [Bug]: Discord message_tool_only turns can append stale tool-failed warning after successful message send
- #93961 fix(agent): mark hasUserFacingAssistantReply true for message_tool_only source replies
- #94031 fix(discord): prevent stale tool-failed warning after successful message_tool_only reply
- #94061 [security-signal] fix(agent-runner): suppress stale tool-failed warning when Discord reply delivered via message tool
- #94072 fix(agents): count message-tool source reply as user-facing reply for tool error warnings
- #94087 fix: prevent heartbeat runner from leaking private replies in message_tool_only mode
- #94088 [security-signal] fix(heartbeat): keep private final reply off-channel in message_tool mode
- #94097 [security-signal] fix(heartbeat): suppress raw text delivery to channel when visibleReplies is message_tool
- #94111 fix(heartbeat): suppress raw reply delivery in message_tool_only mode
- #94121 fix(heartbeat): prevent message_tool_only text leak when model skips the response tool (#94053)
- #94485 [security-signal] fix(heartbeat): keep private-text final replies from leaking to channel in message_tool_only mode
- #94486 fix(heartbeat): prevent private text leak in message_tool_only mode
- #94538 fix: prevent heartbeat runner from leaking private replies when respo…
