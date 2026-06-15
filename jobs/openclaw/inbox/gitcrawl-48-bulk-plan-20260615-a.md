---
repo: openclaw/openclaw
cluster_id: gitcrawl-48-bulk-plan-20260615-a
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
  - "#90361"
candidates:
  - "#77999"
  - "#83712"
  - "#90361"
  - "#90414"
  - "#90453"
  - "#90508"
  - "#90727"
  - "#92187"
  - "#92509"
  - "#92515"
cluster_refs:
  - "#77999"
  - "#83712"
  - "#90361"
  - "#90414"
  - "#90453"
  - "#90508"
  - "#90727"
  - "#92187"
  - "#92509"
  - "#92515"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#90453"
  - "#90727"
canonical_hint: "gitcrawl representative #90361 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 48 on 2026-06-15. Security-signal refs #90453, #90727 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 48

Generated from local gitcrawl run cluster 48 for `openclaw/openclaw`.

Display title:

> [Bug]:Intermittent memory_search "index metadata is missing" despite valid builtin memory index; likely search/reindex race. Locally hotfixed.

Cluster shape from gitcrawl:

- total members: 10
- issues: 5
- pull requests: 5
- open candidates in local store: 10
- security-signal refs requiring route_security: #90453, #90727
- representative: #90361, currently open in local store
- latest member update: 2026-06-14T04:46:07.372842Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #77999 fix(memory): reopen closed sqlite handles
- #83712 Slack socket starved by blocking SQLite VACUUM on bloated main.sqlite; interrupted vacuums leak 53GB of orphaned .tmp files
- #90361 [Bug]:Intermittent memory_search "index metadata is missing" despite valid builtin memory index; likely search/reindex race. Locally hotfixed.
- #90414 agentmemory__memory_search returns "index metadata is missing" persistently (memory-core manager state cache)
- #90453 [security-signal] fix(memory-core): guard searches during safe reindex
- #90508 memory-core main reindex thrashes, leaks main.sqlite.tmp files, and leaves memory_search paused after repair
- #90727 [security-signal] fix(memory): refresh rebuilt index handles
- #92187 Memory Index Repeatedly Broken After Gateway Restart (OOM during Rebuild)
- #92509 fix(memory-core): WAL checkpoint after writeMeta + stale index file cleanup
- #92515 Recover memory search from transient missing metadata
