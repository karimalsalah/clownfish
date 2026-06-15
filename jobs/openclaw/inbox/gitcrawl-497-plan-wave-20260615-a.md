---
repo: openclaw/openclaw
cluster_id: gitcrawl-497-plan-wave-20260615-a
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
  - "#91959"
candidates:
  - "#91959"
  - "#92399"
cluster_refs:
  - "#91959"
  - "#92399"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #91959 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 497 on 2026-06-15."
---

# Gitcrawl Cluster 497

Generated from local gitcrawl run cluster 497 for `openclaw/openclaw`.

Display title:

> Bedrock Mantle (openai-responses) cumulatively duplicates reply text with reasoning enabled (GPT-5.x)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #91959, currently open in local store
- latest member update: 2026-06-14T04:46:04.459088Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91959 Bedrock Mantle (openai-responses) cumulatively duplicates reply text with reasoning enabled (GPT-5.x)
- #92399 fix(llm): collapse cumulative openai-responses message snapshots instead of concatenating [AI-assisted]
