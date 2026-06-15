---
repo: openclaw/openclaw
cluster_id: gitcrawl-208-feature-clean-plan-20260615-a
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
  - "#92256"
candidates:
  - "#57387"
  - "#87953"
  - "#92256"
cluster_refs:
  - "#57387"
  - "#87953"
  - "#92256"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #92256 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 208 on 2026-06-15."
---

# Gitcrawl Cluster 208

Generated from local gitcrawl run cluster 208 for `openclaw/openclaw`.

Display title:

> Feature: Re-enable device pairing plugin with sessions.send-only token scope

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 3
- representative: #92256, currently open in local store
- latest member update: 2026-06-14T04:46:06.664855Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #57387 Feature: HMAC/token-based mutual auth for inter-agent sessions_send
- #87953 [Bug]: Trusted Proxy auth still requires device pairing
- #92256 Feature: Re-enable device pairing plugin with sessions.send-only token scope
