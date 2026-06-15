---
repo: openclaw/openclaw
cluster_id: gitcrawl-298-feature-clean-plan-20260615-a
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
  - "#75074"
candidates:
  - "#75074"
  - "#75075"
  - "#79360"
cluster_refs:
  - "#75074"
  - "#75075"
  - "#79360"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #75074 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 298 on 2026-06-15."
---

# Gitcrawl Cluster 298

Generated from local gitcrawl run cluster 298 for `openclaw/openclaw`.

Display title:

> [Feature]: /v1/responses drops every built-in tool call from `output`; add opt-in flag to surface them

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 3
- representative: #75074, currently open in local store
- latest member update: 2026-06-14T04:46:06.57742Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #75074 [Feature]: /v1/responses drops every built-in tool call from `output`; add opt-in flag to surface them
- #75075 feat(gateway): surface built-in tool calls as function_call output items on /v1/responses
- #79360 Feature: expose Responses image generation IDs for iterative image edits
