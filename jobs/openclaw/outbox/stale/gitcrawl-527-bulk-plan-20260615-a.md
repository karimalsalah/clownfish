---
repo: openclaw/openclaw
cluster_id: gitcrawl-527-bulk-plan-20260615-a
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
  - "#57443"
candidates:
  - "#57443"
cluster_refs:
  - "#57443"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#57480"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #57443 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 527 on 2026-06-15. Existing-overlap refs #57480 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 527

Generated from local gitcrawl run cluster 527 for `openclaw/openclaw`.

Display title:

> [Bug]: Tool JSON Schema patternProperties causes 400 errors on BytePlus Ark (doubao) — schema cleaning should be universal, not provider-specific

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #57480
- representative: #57443, currently open in local store
- latest member update: 2026-06-14T04:46:04.737227Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57443 [Bug]: Tool JSON Schema patternProperties causes 400 errors on BytePlus Ark (doubao) — schema cleaning should be universal, not provider-specific

Existing-overlap context refs:

- #57480 fix(tools): strip patternProperties for all non-Anthropic providers
