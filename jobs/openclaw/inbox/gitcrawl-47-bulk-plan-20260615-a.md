---
repo: openclaw/openclaw
cluster_id: gitcrawl-47-bulk-plan-20260615-a
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
  - "#74163"
candidates:
  - "#74163"
  - "#89724"
  - "#90204"
  - "#91107"
  - "#91176"
  - "#91438"
  - "#92081"
  - "#92302"
  - "#92656"
  - "#92867"
cluster_refs:
  - "#74163"
  - "#89724"
  - "#90204"
  - "#91107"
  - "#91176"
  - "#91438"
  - "#92081"
  - "#92302"
  - "#92656"
  - "#92867"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#74163"
  - "#89724"
  - "#91107"
  - "#91176"
  - "#91438"
  - "#92081"
  - "#92656"
canonical_hint: "gitcrawl representative #74163 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 47 on 2026-06-15. Security-signal refs #74163, #89724, #91107, #91176, #91438, #92081, #92656 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 47

Generated from local gitcrawl run cluster 47 for `openclaw/openclaw`.

Display title:

> WORKING: All Microsoft Issues and PRs (refresh)

Cluster shape from gitcrawl:

- total members: 10
- issues: 2
- pull requests: 8
- open candidates in local store: 10
- security-signal refs requiring route_security: #74163, #89724, #91107, #91176, #91438, #92081, #92656
- representative: #74163, currently open in local store
- latest member update: 2026-06-14T04:46:05.487877Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #74163 [security-signal] WORKING: All Microsoft Issues and PRs (refresh)
- #89724 [security-signal] feat(voice-call): add Microsoft Teams voice provider (OpenClawTeamsBridge)
- #90204 fix(windows): resolve compatibility, path redaction, symlink EPERM, and channel sorting issues
- #91107 [security-signal] feat(voice-call): Microsoft Teams provider (msteams) — inbound voice + video vision
- #91176 [security-signal] feat(voice-call): Microsoft Teams provider (msteams) — voice + inbound video + outbound call-back
- #91438 [security-signal] feat(voice-call): Microsoft Teams provider — CVI voice/video calls
- #92081 [security-signal] feat(msteams): Teams voice (CVI) + chat + governance integration
- #92302 memory.qmd.command path mangled on Windows — QMD memory backend unusable despite working CLI (CommonJS path concatenation strips separators)
- #92656 [security-signal] Proposal: voice/chat → Microsoft Planner task creation (extends the Teams CVI work in #91438/#92081) — bundled vs standalone plugin?
- #92867 fix(memory-qmd): preserve Windows absolute paths in QMD command resolution
