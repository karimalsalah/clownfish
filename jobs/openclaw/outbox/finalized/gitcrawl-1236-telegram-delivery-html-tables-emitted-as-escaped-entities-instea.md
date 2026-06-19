---
repo: openclaw/openclaw
cluster_id: gitcrawl-1236-telegram-delivery-html-tables-emitted-as-escaped-entities-instea
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
  - "#94317"
candidates:
  - "#94317"
cluster_refs:
  - "#94317"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#94321"
  - "#94457"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94317 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1236 on 2026-06-19. Existing-overlap refs #94321, #94457 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1236

Generated from local gitcrawl run cluster 1236 for `openclaw/openclaw`.

Display title:

> Telegram delivery: HTML tables emitted as escaped entities instead of rendered markup

Cluster shape from gitcrawl:

- total members: 3
- issues: 1
- pull requests: 2
- open candidates in local store: 1
- excluded existing-overlap refs: #94321, #94457
- representative: #94317, currently open in local store
- latest member update: 2026-06-19T02:13:00.492399Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94317 Telegram delivery: HTML tables emitted as escaped entities instead of rendered markup

Existing-overlap context refs:

- #94321 fix(telegram): normalize all HTML tables before entity-escaping in rich messages
- #94457 fix: convert HTML tables to code blocks for Telegram delivery (#94317)
