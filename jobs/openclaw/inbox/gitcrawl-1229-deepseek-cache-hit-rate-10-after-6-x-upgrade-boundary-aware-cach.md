---
repo: openclaw/openclaw
cluster_id: gitcrawl-1229-deepseek-cache-hit-rate-10-after-6-x-upgrade-boundary-aware-cach
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
  - "#94518"
candidates:
  - "#90583"
  - "#94518"
cluster_refs:
  - "#90583"
  - "#94518"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94582"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94518 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1229 on 2026-06-19. Existing-overlap refs #94582 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1229

Generated from local gitcrawl run cluster 1229 for `openclaw/openclaw`.

Display title:

> DeepSeek cache hit rate <10% after 6.x upgrade - boundary-aware caching breaks prefix matching

Cluster shape from gitcrawl:

- total members: 3
- issues: 2
- pull requests: 1
- open candidates in local store: 2
- excluded existing-overlap refs: #94582
- representative: #94518, currently open in local store
- latest member update: 2026-06-19T02:13:00.257739Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90583 [Feature]: OpenClaw 6.1: Critically low cache hit rate causing token costs to spike
- #94518 DeepSeek cache hit rate <10% after 6.x upgrade - boundary-aware caching breaks prefix matching

Existing-overlap context refs:

- #94582 [security-signal] fix(openai-completions): add disableBoundaryAwareCache compat option for prefix-matching cache providers
