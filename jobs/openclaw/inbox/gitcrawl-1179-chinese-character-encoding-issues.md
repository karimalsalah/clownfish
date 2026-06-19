---
repo: openclaw/openclaw
cluster_id: gitcrawl-1179-chinese-character-encoding-issues
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
  - "#94504"
candidates:
  - "#94504"
cluster_refs:
  - "#94504"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#87601"
  - "#94510"
  - "#94521"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #94504 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 1179 on 2026-06-19. Existing-overlap refs #87601, #94510, #94521 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1179

Generated from local gitcrawl run cluster 1179 for `openclaw/openclaw`.

Display title:

> Chinese character encoding issues

Cluster shape from gitcrawl:

- total members: 4
- issues: 1
- pull requests: 3
- open candidates in local store: 1
- excluded existing-overlap refs: #87601, #94510, #94521
- representative: #94504, currently open in local store
- latest member update: 2026-06-19T02:13:00.992932Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #94504 Chinese character encoding issues

Existing-overlap context refs:

- #87601 fix(docs): render onboarding CLI info callout
- #94510 [security-signal] docs(onboarding): normalize inline Info callout to block form
- #94521 [security-signal] fix(docs-i18n): detect and retry Chinese mojibake output from AI translation
