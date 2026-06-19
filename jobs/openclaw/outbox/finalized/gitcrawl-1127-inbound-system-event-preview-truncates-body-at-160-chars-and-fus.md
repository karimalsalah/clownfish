---
repo: openclaw/openclaw
cluster_id: gitcrawl-1127-inbound-system-event-preview-truncates-body-at-160-chars-and-fus
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
  - "#94549"
candidates:
  - "#93966"
  - "#94549"
cluster_refs:
  - "#93966"
  - "#94549"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#67761"
  - "#94085"
  - "#94583"
  - "#94589"
  - "#94608"
  - "#94618"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94549 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1127 on 2026-06-19. Existing-overlap refs #67761, #94085, #94583, #94589, #94608, #94618 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1127

Generated from local gitcrawl run cluster 1127 for `openclaw/openclaw`.

Display title:

> Inbound System: event preview truncates body at 160 chars and fuses into the metadata block (still reproduces on 2026.6.1; re-file of #67503)

Cluster shape from gitcrawl:

- total members: 8
- issues: 2
- pull requests: 6
- open candidates in local store: 2
- excluded existing-overlap refs: #67761, #94085, #94583, #94589, #94608, #94618
- representative: #94549, currently open in local store
- latest member update: 2026-06-19T02:13:00.460303Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93966 Inbound metadata leakage: runtime context and conversation info exposed to user
- #94549 Inbound System: event preview truncates body at 160 chars and fuses into the metadata block (still reproduces on 2026.6.1; re-file of #67503)

Existing-overlap context refs:

- #67761 fix: remove truncated preview from inbound system events
- #94085 fix: inbound metadata leakage — missing sentinels and display gaps
- #94583 fix(auto-reply): add trailing newline to drainFormattedSystemEvents output (fixes #94549)
- #94589 [security-signal] fix(channels): stop duplicating inbound previews in system events
- #94608 fix(channels): keep inbound system event labels body-free
- #94618 [security-signal] fix: Inbound System: event preview truncates body at 160 chars and fuses into the metadata block (still reproduces on 2026.6.1; re-file of #67503)
