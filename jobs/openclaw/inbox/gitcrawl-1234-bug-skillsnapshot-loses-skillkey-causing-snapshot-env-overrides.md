---
repo: openclaw/openclaw
cluster_id: gitcrawl-1234-bug-skillsnapshot-loses-skillkey-causing-snapshot-env-overrides
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
  - "#94146"
candidates:
  - "#94146"
cluster_refs:
  - "#94146"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94163"
  - "#94221"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94146 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1234 on 2026-06-19. Existing-overlap refs #94163, #94221 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1234

Generated from local gitcrawl run cluster 1234 for `openclaw/openclaw`.

Display title:

> [Bug]: SkillSnapshot loses skillKey, causing snapshot env overrides to miss skills.entries.<skillKey>

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #94163, #94221
- representative: #94146, currently open in local store
- latest member update: 2026-06-19T02:13:00.471454Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94146 [Bug]: SkillSnapshot loses skillKey, causing snapshot env overrides to miss skills.entries.<skillKey>

Existing-overlap context refs:

- #94163 fix(skills): persist skillKey in SkillSnapshot for snapshot env override resolution (fixes #94146)
- #94221 [security-signal] fix(skills): preserve skillKey in SkillSnapshot for env override resolution
