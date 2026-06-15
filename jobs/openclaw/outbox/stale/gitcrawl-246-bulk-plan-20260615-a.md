---
repo: openclaw/openclaw
cluster_id: gitcrawl-246-bulk-plan-20260615-a
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
  - "#90923"
candidates:
  - "#89092"
  - "#90923"
cluster_refs:
  - "#89092"
  - "#90923"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#60398"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89092"
canonical_hint: "gitcrawl representative #90923 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 246 on 2026-06-15. Security-signal refs #89092 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #60398 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 246

Generated from local gitcrawl run cluster 246 for `openclaw/openclaw`.

Display title:

> fix(daemon): write LaunchAgent plist to boot volume when home is on external APFS

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 2
- excluded existing-overlap refs: #60398
- security-signal refs requiring route_security: #89092
- representative: #90923, currently open in local store
- latest member update: 2026-06-14T04:46:06.091028Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #89092 [security-signal] [Fix] Resolve LaunchAgent plist path for external homes
- #90923 fix(daemon): write LaunchAgent plist to boot volume when home is on external APFS

Existing-overlap context refs:

- #60398 gateway install fails with error 5 when home directory is on external APFS volume
