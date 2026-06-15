---
repo: openclaw/openclaw
cluster_id: gitcrawl-54-bulk-plan-20260615-a
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
  - "#91596"
candidates:
  - "#90042"
  - "#90447"
  - "#91001"
  - "#91010"
  - "#91170"
  - "#91596"
  - "#91660"
  - "#91691"
  - "#91706"
cluster_refs:
  - "#90042"
  - "#90447"
  - "#91001"
  - "#91010"
  - "#91170"
  - "#91596"
  - "#91660"
  - "#91691"
  - "#91706"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#91001"
  - "#91010"
  - "#91170"
  - "#91596"
canonical_hint: "gitcrawl representative #91596 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 54 on 2026-06-15. Security-signal refs #91001, #91010, #91170, #91596 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 54

Generated from local gitcrawl run cluster 54 for `openclaw/openclaw`.

Display title:

> fix(memory): use local modelPath for status identity so custom local models aren't always dirty (fixes #91001)

Cluster shape from gitcrawl:

- total members: 9
- issues: 2
- pull requests: 7
- open candidates in local store: 9
- security-signal refs requiring route_security: #91001, #91010, #91170, #91596
- representative: #91596, currently open in local store
- latest member update: 2026-06-14T04:46:05.429565Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90042 Gateway memory_search index stuck dirty: provider.model empty during boot overwrites correct index identity
- #90447 fix(memory-core): resolve adapter default model for index identity state
- #91001 [security-signal] [Bug]: local embeedings provider fail
- #91010 [security-signal] fix(memory): honor local model path in index identity
- #91170 [security-signal] fix(memory): align local modelPath index identity on status
- #91596 [security-signal] fix(memory): use local modelPath for status identity so custom local models aren't always dirty (fixes #91001)
- #91660 [AI] fix(memory): backfill provider.model with resolved model name in…
- #91691 [AI] fix(memory): prevent empty-string expectedModel in resolveMemory…
- #91706 fix(memory): keep local embedding indexes clean when only local.modelPath is set
