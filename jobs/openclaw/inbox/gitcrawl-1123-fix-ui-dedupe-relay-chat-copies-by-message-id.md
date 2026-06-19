---
repo: openclaw/openclaw
cluster_id: gitcrawl-1123-fix-ui-dedupe-relay-chat-copies-by-message-id
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
canonical: []
candidates:
  - "#93044"
  - "#94479"
cluster_refs:
  - "#93044"
  - "#94479"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#85771"
  - "#86646"
  - "#93065"
  - "#93298"
  - "#94497"
  - "#94558"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #93065 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1123 on 2026-06-19. Existing-overlap refs #85771, #86646, #93065, #93298, #94497, #94558 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1123

Generated from local gitcrawl run cluster 1123 for `openclaw/openclaw`.

Display title:

> fix(ui): dedupe relay chat copies by message id

Cluster shape from gitcrawl:

- total members: 8
- issues: 3
- pull requests: 5
- open candidates in local store: 2
- excluded existing-overlap refs: #85771, #86646, #93065, #93298, #94497, #94558
- representative: #93065, currently open in local store
- latest member update: 2026-06-19T02:13:01.114768Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #93044 control-ui webchat double-renders agent replies when dmScope=main (one copy carries channel-relay envelope)
- #94479 Control UI: User message not rendered until assistant response starts streaming

Existing-overlap context refs:

- #85771 [Bug]: WebChat UI renders duplicate assistant messages on chat.status final event
- #86646 fix(ui): deduplicate assistant messages on chat.status final event
- #93065 [security-signal] fix(ui): dedupe relay chat copies by message id
- #93298 [security-signal] fix #93044: control-ui webchat double-renders agent replies when dmScope=main
- #94497 [security-signal] fix(control-ui): render user message immediately on send (#94479)
- #94558 fix #94479: Control UI: User message not rendered until assistant response starts streaming
