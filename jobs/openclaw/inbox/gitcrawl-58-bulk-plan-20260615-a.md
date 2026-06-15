---
repo: openclaw/openclaw
cluster_id: gitcrawl-58-bulk-plan-20260615-a
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
  - "#90421"
candidates:
  - "#89932"
  - "#90388"
  - "#90421"
  - "#90493"
  - "#90756"
  - "#90770"
  - "#91535"
  - "#92733"
cluster_refs:
  - "#89932"
  - "#90388"
  - "#90421"
  - "#90493"
  - "#90756"
  - "#90770"
  - "#91535"
  - "#92733"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90770"
  - "#92733"
canonical_hint: "gitcrawl representative #90421 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 58 on 2026-06-15. Security-signal refs #90770, #92733 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 58

Generated from local gitcrawl run cluster 58 for `openclaw/openclaw`.

Display title:

> fix(skills): reconcile stale workshop proposals when target skill exists or is missing

Cluster shape from gitcrawl:

- total members: 8
- issues: 2
- pull requests: 6
- open candidates in local store: 8
- security-signal refs requiring route_security: #90770, #92733
- representative: #90421, currently open in local store
- latest member update: 2026-06-14T04:46:05.566961Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89932 docs: document Skill Workshop tool visibility rules
- #90388 Skill Workshop proposal can remain shown as waiting after skill is already active
- #90421 fix(skills): reconcile stale workshop proposals when target skill exists or is missing
- #90493 fix(skills): stale create proposals with existing targets
- #90756 [Bug]: Skill workshop does not show anything in the GUI but command line does show it.
- #90770 [security-signal] fix(ui): thread agent scope through Skill Workshop proposals
- #91535 fix(ui): route skill workshop RPCs through current session agent
- #92733 [security-signal] Support managed Skill Workshop updates
