---
repo: openclaw/openclaw
cluster_id: gitcrawl-60-bulk-plan-20260615-a
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
  - "#90866"
candidates:
  - "#79104"
  - "#84276"
  - "#84288"
  - "#84300"
  - "#86149"
  - "#87665"
  - "#90017"
  - "#90866"
cluster_refs:
  - "#79104"
  - "#84276"
  - "#84288"
  - "#84300"
  - "#86149"
  - "#87665"
  - "#90017"
  - "#90866"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#84288"
  - "#84300"
canonical_hint: "gitcrawl representative #90866 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 60 on 2026-06-15. Security-signal refs #84288, #84300 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 60

Generated from local gitcrawl run cluster 60 for `openclaw/openclaw`.

Display title:

> Discord: ship speculative "Thinking…" placeholder + typing heartbeat (parity with Slack #90017)

Cluster shape from gitcrawl:

- total members: 8
- issues: 6
- pull requests: 2
- open candidates in local store: 8
- security-signal refs requiring route_security: #84288, #84300
- representative: #90866, currently open in local store
- latest member update: 2026-06-14T04:46:07.297234Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #79104 Discord guild channels delay typing despite typingMode=instant
- #84276 Discord typing indicator lingers ~10s after reply delivery in message_tool_only source-reply path
- #84288 [security-signal] fix(discord): avoid duplicate typing keepalive for tool replies
- #84300 [security-signal] fix(discord): stop typing keepalive on message_tool_only delivery (#84276)
- #86149 Discord typing indicator is delayed despite typingMode=instant
- #87665 [discord] Discord-originated subagent tasks default to done_only, leaving channel stuck on typing indicator
- #90017 feat(slack): speculative "Thinking…" placeholder posted within the 3s ACK window
- #90866 Discord: ship speculative "Thinking…" placeholder + typing heartbeat (parity with Slack #90017)
