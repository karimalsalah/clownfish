---
repo: openclaw/openclaw
cluster_id: gitcrawl-736-feature-clean-plan-20260615-a
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
  - "#81232"
candidates:
  - "#81232"
  - "#81243"
cluster_refs:
  - "#81232"
  - "#81243"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #81232 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 736 on 2026-06-15."
---

# Gitcrawl Cluster 736

Generated from local gitcrawl run cluster 736 for `openclaw/openclaw`.

Display title:

> [Feature] Discord: fetch a single message by channelId + messageId (or URL)

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- representative: #81232, currently open in local store
- latest member update: 2026-06-14T04:46:06.921536Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #81232 [Feature] Discord: fetch a single message by channelId + messageId (or URL)
- #81243 feat(discord): add fetch action to retrieve a single message by ID or URL
