---
repo: openclaw/openclaw
cluster_id: gitcrawl-1235-fix-reset-subagent-session-idle-timeout-on-successful-tool-calls
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
  - "#94124"
candidates:
  - "#94124"
  - "#94153"
cluster_refs:
  - "#94124"
  - "#94153"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94133"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94124 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1235 on 2026-06-19. Existing-overlap refs #94133 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1235

Generated from local gitcrawl run cluster 1235 for `openclaw/openclaw`.

Display title:

> fix: Reset subagent session idle timeout on successful tool calls to prevent premature termination

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #94133
- representative: #94124, currently open in local store
- latest member update: 2026-06-19T02:13:00.46626Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94124 fix: Reset subagent session idle timeout on successful tool calls to prevent premature termination
- #94153 feat: Persist subagent completion announcements to message queue instead of direct session dispatch

Existing-overlap context refs:

- #94133 fix: refresh subagent idle timeout on successful tool calls
