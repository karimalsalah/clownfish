---
repo: openclaw/openclaw
cluster_id: gitcrawl-403-bulk-plan-20260615-a
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
  - "#48940"
candidates:
  - "#48940"
  - "#73887"
cluster_refs:
  - "#48940"
  - "#73887"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#48940"
canonical_hint: "gitcrawl representative #48940 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 403 on 2026-06-15. Security-signal refs #48940 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 403

Generated from local gitcrawl run cluster 403 for `openclaw/openclaw`.

Display title:

> ACP: add gateway-owned node-backed runtime

Cluster shape from gitcrawl:

- total members: 2
- issues: 0
- pull requests: 2
- open candidates in local store: 2
- security-signal refs requiring route_security: #48940
- representative: #48940, currently open in local store
- latest member update: 2026-06-14T04:46:06.554629Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #48940 [security-signal] ACP: add gateway-owned node-backed runtime
- #73887 Fix ACP replay test mocks
