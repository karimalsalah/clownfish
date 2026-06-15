---
repo: openclaw/openclaw
cluster_id: gitcrawl-480-bulk-plan-20260615-a
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
  - "#8813"
candidates:
  - "#8813"
  - "#52473"
cluster_refs:
  - "#8813"
  - "#52473"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#52473"
canonical_hint: "gitcrawl representative #8813 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 480 on 2026-06-15. Security-signal refs #52473 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 480

Generated from local gitcrawl run cluster 480 for `openclaw/openclaw`.

Display title:

> System prompt should prefer Skill tool over read when available

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- security-signal refs requiring route_security: #52473
- representative: #8813, currently open in local store
- latest member update: 2026-06-14T04:46:04.903095Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #8813 System prompt should prefer Skill tool over read when available
- #52473 [security-signal] [Feature]: Auto-inject SKILL.md content when skill is invoked via slash command
