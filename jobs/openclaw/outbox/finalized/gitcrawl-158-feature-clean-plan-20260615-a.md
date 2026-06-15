---
repo: openclaw/openclaw
cluster_id: gitcrawl-158-feature-clean-plan-20260615-a
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
  - "#80065"
candidates:
  - "#80065"
  - "#80521"
  - "#83496"
  - "#91498"
cluster_refs:
  - "#80065"
  - "#80521"
  - "#83496"
  - "#91498"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #80065 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 158 on 2026-06-15."
---

# Gitcrawl Cluster 158

Generated from local gitcrawl run cluster 158 for `openclaw/openclaw`.

Display title:

> Feature request: surface auth profile-rotation settings (auth.cooldowns.*) in the UI / configure wizard

Cluster shape from gitcrawl:

- total members: 4
- issues: 4
- pull requests: 0
- open candidates in local store: 4
- representative: #80065, currently open in local store
- latest member update: 2026-06-14T04:46:07.388776Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #80065 Feature request: surface auth profile-rotation settings (auth.cooldowns.*) in the UI / configure wizard
- #80521 UI feature request: model picker + drag-to-reorder for primary/fallback model selection in Agents > Overview
- #83496 [Feature]: Add primary-first Codex auth profile mode for stable Pro + backup account setups
- #91498 [Feature]: Allow model aliases or runtimes to select different auth profiles for the same provider
