---
repo: openclaw/openclaw
cluster_id: gitcrawl-61-bulk-plan-20260615-a
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
  - "#89584"
candidates:
  - "#82984"
  - "#82985"
  - "#88887"
  - "#89477"
  - "#89584"
  - "#90023"
  - "#90030"
  - "#90117"
cluster_refs:
  - "#82984"
  - "#82985"
  - "#88887"
  - "#89477"
  - "#89584"
  - "#90023"
  - "#90030"
  - "#90117"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#89584"
canonical_hint: "gitcrawl representative #89584 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 61 on 2026-06-15. Security-signal refs #89584 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 61

Generated from local gitcrawl run cluster 61 for `openclaw/openclaw`.

Display title:

> feat(memory-core): optional cross-encoder rerank stage for memory search

Cluster shape from gitcrawl:

- total members: 8
- issues: 3
- pull requests: 5
- open candidates in local store: 8
- security-signal refs requiring route_security: #89584
- representative: #89584, currently open in local store
- latest member update: 2026-06-14T04:46:07.416925Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #82984 MemoryCorpusSupplement.search forced to re-run manager.search; engine already has the candidates
- #82985 feat(plugins): pass engine candidates to MemoryCorpusSupplement.search
- #88887 fix(memory-core): don't run the LLM reranker in vsearch/search modes
- #89477 [Feature]: optional cross-encoder rerank stage for memory search
- #89584 [security-signal] feat(memory-core): optional cross-encoder rerank stage for memory search
- #90023 QMD memory_search zero-hit queries trigger synchronous force sync and stall interactive turns
- #90030 fix(memory-core): skip qmd zero-hit search sync
- #90117 fix: skip qmd zero-hit sync retry in memory_search
