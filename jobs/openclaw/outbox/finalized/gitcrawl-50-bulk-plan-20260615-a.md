---
repo: openclaw/openclaw
cluster_id: gitcrawl-50-bulk-plan-20260615-a
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
  - "#92833"
candidates:
  - "#72717"
  - "#75312"
  - "#75435"
  - "#77897"
  - "#77899"
  - "#78035"
  - "#92633"
  - "#92647"
  - "#92833"
cluster_refs:
  - "#72717"
  - "#75312"
  - "#75435"
  - "#77897"
  - "#77899"
  - "#78035"
  - "#92633"
  - "#92647"
  - "#92833"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#75435"
  - "#77899"
  - "#78035"
canonical_hint: "gitcrawl representative #92833 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 50 on 2026-06-15. Security-signal refs #75435, #77899, #78035 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 50

Generated from local gitcrawl run cluster 50 for `openclaw/openclaw`.

Display title:

> fix(memory): search memory and wiki concurrently for corpus=all (#92633)

Cluster shape from gitcrawl:

- total members: 9
- issues: 4
- pull requests: 5
- open candidates in local store: 9
- security-signal refs requiring route_security: #75435, #77899, #78035
- representative: #92833, currently open in local store
- latest member update: 2026-06-14T04:46:06.690743Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #72717 Feature Request: SQLite FTS index for wiki_search to improve synthesis query performance
- #75312 Bug: wiki_search throws 'sharedMemoryManager.search is not a function' when search.backend=shared and corpus includes memory/all
- #75435 [security-signal] fix(memory-wiki): tolerate unavailable shared search
- #77897 [Bug]: searchMemoryCorpusSupplements uses Promise.all causing single supplement failure to discard all results
- #77899 [security-signal] fix(memory-core): use Promise.allSettled in searchMemoryCorpusSupplements
- #78035 [security-signal] fix(memory-core): preserve sibling supplement results when one search rejects (#77897)
- #92633 memory_search corpus=all times out while individual corpora succeed
- #92647 fix(memory): attribute corpus=all timeouts to the slow branch instead of the provider
- #92833 fix(memory): search memory and wiki concurrently for corpus=all (#92633)
