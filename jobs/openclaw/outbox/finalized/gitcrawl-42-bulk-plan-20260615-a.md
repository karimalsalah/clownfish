---
repo: openclaw/openclaw
cluster_id: gitcrawl-42-bulk-plan-20260615-a
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
  - "#92339"
candidates:
  - "#90349"
  - "#91804"
  - "#91873"
  - "#92339"
  - "#92354"
  - "#92372"
  - "#92432"
  - "#92451"
  - "#92455"
  - "#92723"
cluster_refs:
  - "#90349"
  - "#91804"
  - "#91873"
  - "#92339"
  - "#92354"
  - "#92372"
  - "#92432"
  - "#92451"
  - "#92455"
  - "#92723"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#64267"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#92354"
  - "#92723"
canonical_hint: "gitcrawl representative #92339 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 42 on 2026-06-15. Security-signal refs #92354, #92723 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #64267 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 42

Generated from local gitcrawl run cluster 42 for `openclaw/openclaw`.

Display title:

> fix(issue): resolve #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5

Cluster shape from gitcrawl:

- total members: 11
- issues: 6
- pull requests: 5
- open candidates in local store: 10
- excluded existing-overlap refs: #64267
- security-signal refs requiring route_security: #92354, #92723
- representative: #92339, currently open in local store
- latest member update: 2026-06-14T04:46:05.449464Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90349 Feature: Context Budget/Compactor — intelligent prompt slimming for small-context models
- #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5
- #91873 [Bug]: Slack channel silently drops after upgrade to 2026.6.5 — plugins.allow regression
- #92339 fix(issue): resolve #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5
- #92354 [security-signal] fix(issue): resolve #91804 [Bug]: Internal Reasoning Leakage in 2026.6.5
- #92372 [Bug]: read tool drops memory/ prefix in multi-agent setup, causing ENOENT
- #92432 fix(issue): resolve #92372 [Bug]: read tool drops memory/ prefix in multi-agent setup, 
- #92451 v2026.6.x system prompt bloat causes instruction following degradation on smaller models
- #92455 fix(issue): resolve #92451 v2026.6.x system prompt bloat causes instruction following d
- #92723 [security-signal] fix(issue): resolve #91873 [Bug]: Slack channel silently drops after upgrade to 2026.6.

Existing-overlap context refs:

- #64267 Bug: OpenClaw 2026.4.9 exposes agent internal thinking (English) to user
