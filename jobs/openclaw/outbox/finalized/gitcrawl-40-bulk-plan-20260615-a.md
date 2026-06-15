---
repo: openclaw/openclaw
cluster_id: gitcrawl-40-bulk-plan-20260615-a
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
  - "#92062"
candidates:
  - "#71537"
  - "#73809"
  - "#73883"
  - "#76134"
  - "#80251"
  - "#90239"
  - "#90259"
  - "#90981"
  - "#92062"
cluster_refs:
  - "#71537"
  - "#73809"
  - "#73883"
  - "#76134"
  - "#80251"
  - "#90239"
  - "#90259"
  - "#90981"
  - "#92062"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#45003"
  - "#64832"
  - "#65564"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#76134"
  - "#90239"
canonical_hint: "gitcrawl representative #92062 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 40 on 2026-06-15. Security-signal refs #76134, #90239 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #45003, #64832, #65564 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 40

Generated from local gitcrawl run cluster 40 for `openclaw/openclaw`.

Display title:

> [Bug]: WebChat sessions_history misses prior history split into reset/archive session files for same visible dashboard conversation

Cluster shape from gitcrawl:

- total members: 12
- issues: 4
- pull requests: 8
- open candidates in local store: 9
- excluded existing-overlap refs: #45003, #64832, #65564
- security-signal refs requiring route_security: #76134, #90239
- representative: #92062, currently open in local store
- latest member update: 2026-06-14T04:46:06.659591Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71537 Recover archived (.reset) session transcripts in memory hook + session-logs skill
- #73809 fix(heartbeat): archive rotated transcript on isolated-session reset
- #73883 feat(session): add includeArchived to chat.history and sessions_history
- #76134 [security-signal] fix(sessions): fall back to latest reset archive for missing async transcripts
- #80251 fix(sessions): rotate reset transcripts and clear compaction state
- #90239 [security-signal] [AI-assisted] Add session history family lookup
- #90259 Add reset family carryover summaries
- #90981 [Feature] sessions_history: add pagination/offset and export support
- #92062 [Bug]: WebChat sessions_history misses prior history split into reset/archive session files for same visible dashboard conversation

Existing-overlap context refs:

- #45003 [Feature]: Script to restore session history archived by new daily-reset mechanism (introduced v2026.2+)
- #64832 fix(agents): archive orphaned isolated-session transcripts after rotation
- #65564 [Bug]: heartbeat isolatedSession rotates sessionId but reuses old transcript file
