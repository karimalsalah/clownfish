---
repo: openclaw/openclaw
cluster_id: gitcrawl-506-bulk-plan-20260615-a
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
  - "#91902"
candidates:
  - "#91902"
  - "#92079"
cluster_refs:
  - "#91902"
  - "#92079"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92079"
canonical_hint: "gitcrawl representative #91902 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 506 on 2026-06-15. Security-signal refs #92079 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 506

Generated from local gitcrawl run cluster 506 for `openclaw/openclaw`.

Display title:

> [BUG] memory index --force CLI writes incompatible meta providerKey, breaks runtime memory_search

Cluster shape from gitcrawl:

- total members: 2
- issues: 1
- pull requests: 1
- open candidates in local store: 2
- security-signal refs requiring route_security: #92079
- representative: #91902, currently open in local store
- latest member update: 2026-06-14T04:46:04.623804Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #91902 [BUG] memory index --force CLI writes incompatible meta providerKey, breaks runtime memory_search
- #92079 [security-signal] [AI] fix(memory): auto-fix providerKey mismatch from CLI index --force
