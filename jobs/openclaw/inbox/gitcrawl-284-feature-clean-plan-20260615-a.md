---
repo: openclaw/openclaw
cluster_id: gitcrawl-284-feature-clean-plan-20260615-a
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
  - "#79281"
candidates:
  - "#42986"
  - "#53548"
  - "#79281"
cluster_refs:
  - "#42986"
  - "#53548"
  - "#79281"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #79281 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 284 on 2026-06-15."
---

# Gitcrawl Cluster 284

Generated from local gitcrawl run cluster 284 for `openclaw/openclaw`.

Display title:

> [Feature] Default ACP thread-binding preset (or opt-in config flag) — third-party channels currently re-implement ~870 LOC each

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #79281, currently open in local store
- latest member update: 2026-06-14T04:46:06.237729Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42986 [Feature Request] Telegram Channel: Support Thread Binding for Subagent Sessions
- #53548 Decouple mode="session" from thread binding requirement
- #79281 [Feature] Default ACP thread-binding preset (or opt-in config flag) — third-party channels currently re-implement ~870 LOC each
