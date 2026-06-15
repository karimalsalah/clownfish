---
repo: openclaw/openclaw
cluster_id: gitcrawl-124-feature-clean-plan-20260615-a
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
  - "#42539"
candidates:
  - "#42539"
  - "#73210"
  - "#83511"
  - "#83988"
cluster_refs:
  - "#42539"
  - "#73210"
  - "#83511"
  - "#83988"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #42539 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 124 on 2026-06-15."
---

# Gitcrawl Cluster 124

Generated from local gitcrawl run cluster 124 for `openclaw/openclaw`.

Display title:

> Feature: TTS delivery mode option — separate text + voice messages on Telegram

Cluster shape from gitcrawl:

- total members: 4
- issues: 3
- pull requests: 1
- open candidates in local store: 4
- representative: #42539, currently open in local store
- latest member update: 2026-06-14T04:46:07.388194Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #42539 Feature: TTS delivery mode option — separate text + voice messages on Telegram
- #73210 Auto-TTS: add voice-only delivery mode + improve system prompt for natural speech output
- #83511 TTS in final mode: visible text sent before audio causes Telegram delete-and-resend churn
- #83988 fix(tts): defer text settlement for final-mode TTS to eliminate churn (#83511)
