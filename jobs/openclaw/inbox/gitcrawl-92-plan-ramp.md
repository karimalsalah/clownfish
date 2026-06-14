---
repo: openclaw/openclaw
cluster_id: gitcrawl-92-plan-ramp
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
  - "#70903"
candidates:
  - "#39807"
  - "#70903"
  - "#87694"
  - "#87697"
  - "#88709"
cluster_refs:
  - "#39807"
  - "#70903"
  - "#87694"
  - "#87697"
  - "#88709"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "gitcrawl representative #70903 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 92 on 2026-06-14."
---

# Gitcrawl Cluster 92

Generated from local gitcrawl run cluster 92 for `openclaw/openclaw`.

Display title:

> Persistent file-based provider cooldown blocks user for hours after billing recovery

Cluster shape from gitcrawl:

- total members: 5
- issues: 2
- pull requests: 3
- open candidates in local store: 5
- representative: #70903, currently open in local store
- latest member update: 2026-06-14T04:46:05.791151Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #39807 Bug: Billing error (402) causes infinite retry death spiral for inline-apiKey providers (no backoff)
- #70903 Persistent file-based provider cooldown blocks user for hours after billing recovery
- #87694 fix(auth): tighten billing cooldown defaults to recover from multi-hour lockouts (#70903)
- #87697 fix(auth): clear stale provider cooldowns after reauth
- #88709 fix(auth): cooldown inline api key billing failures
