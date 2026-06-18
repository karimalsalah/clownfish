---
repo: openclaw/openclaw
cluster_id: gitcrawl-804-refreshed-cluster-wave
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
  - "#77610"
candidates:
  - "#77610"
  - "#77750"
cluster_refs:
  - "#77610"
  - "#77750"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #77610 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 804 on 2026-06-18."
---

# Gitcrawl Cluster 804

Generated from local gitcrawl run cluster 804 for `openclaw/openclaw`.

Display title:

> exec tool: spawn EBADF after ~10 spawn() calls on macOS (libuv kqueue slot leak)

Cluster shape from gitcrawl:

- total members: 2
- issues: 2
- pull requests: 0
- open candidates in local store: 2
- representative: #77610, currently open in local store
- latest member update: 2026-06-17T06:51:27.605727Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77610 exec tool: spawn EBADF after ~10 spawn() calls on macOS (libuv kqueue slot leak)
- #77750 spawn EBADF when gateway file descriptor count is high
