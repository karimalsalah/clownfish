---
repo: openclaw/openclaw
cluster_id: gitcrawl-712-plan-wave-20260615-a
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
  - "#63918"
candidates:
  - "#63918"
  - "#91426"
cluster_refs:
  - "#63918"
  - "#91426"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #63918 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 712 on 2026-06-15."
---

# Gitcrawl Cluster 712

Generated from local gitcrawl run cluster 712 for `openclaw/openclaw`.

Display title:

> Cron agentTurn sends thinking=none to OpenAI (gpt-5-nano 400) even when thinking=minimal

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #63918, currently open in local store
- latest member update: 2026-06-14T04:46:05.803919Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #63918 Cron agentTurn sends thinking=none to OpenAI (gpt-5-nano 400) even when thinking=minimal
- #91426 Follow-up: thinking mapping issue in Cron (63918)
