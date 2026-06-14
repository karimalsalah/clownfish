---
repo: openclaw/openclaw
cluster_id: gitcrawl-95-plan-ramp
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
  - "#92439"
candidates:
  - "#92147"
  - "#92400"
  - "#92436"
  - "#92437"
  - "#92439"
cluster_refs:
  - "#92147"
  - "#92400"
  - "#92436"
  - "#92437"
  - "#92439"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #92439 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 95 on 2026-06-14."
---

# Gitcrawl Cluster 95

Generated from local gitcrawl run cluster 95 for `openclaw/openclaw`.

Display title:

> fix/92327 openai responses fix

Cluster shape from gitcrawl:

- total members: 5
- issues: 1
- pull requests: 4
- open candidates in local store: 5
- representative: #92439, currently open in local store
- latest member update: 2026-06-14T04:46:04.399289Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92147 [codex] support Responses system prompts in instructions
- #92400 [Bug]: `openai-responses` adapter sends system prompt in `input` instead of `instructions`
- #92436 fix: openai-responses adapter sends system prompt in instructions
- #92437 fix/92327 webchat inter session ui regression final
- #92439 fix/92327 openai responses fix
