---
repo: openclaw/openclaw
cluster_id: gitcrawl-643-bulk-plan-20260615-a
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
  - "#62514"
candidates:
  - "#62514"
cluster_refs:
  - "#62514"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#63710"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #62514 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 643 on 2026-06-15. Existing-overlap refs #63710 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 643

Generated from local gitcrawl run cluster 643 for `openclaw/openclaw`.

Display title:

> [Bug]: WEBUI / Edge cases —— Image input causes some multimodal models to misuse tool calling

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 1
- excluded existing-overlap refs: #63710
- representative: #62514, currently open in local store
- latest member update: 2026-06-14T04:46:05.385812Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #62514 [Bug]: WEBUI / Edge cases —— Image input causes some multimodal models to misuse tool calling

Existing-overlap context refs:

- #63710 [security-signal] fix(image): mixed-source image input for vision-capable models
