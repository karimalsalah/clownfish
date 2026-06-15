---
repo: openclaw/openclaw
cluster_id: gitcrawl-49-feature-clean-plan-20260615-a
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
  - "#86105"
candidates:
  - "#86105"
  - "#86107"
  - "#86108"
  - "#86109"
  - "#86110"
  - "#86111"
  - "#86112"
  - "#86113"
  - "#86114"
  - "#86115"
cluster_refs:
  - "#86105"
  - "#86107"
  - "#86108"
  - "#86109"
  - "#86110"
  - "#86111"
  - "#86112"
  - "#86113"
  - "#86114"
  - "#86115"
overlap_policy: "skip-any"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #86105 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 49 on 2026-06-15."
---

# Gitcrawl Cluster 49

Generated from local gitcrawl run cluster 49 for `openclaw/openclaw`.

Display title:

> [Feature]: Channel Broker consolidation program for maintained chat channels

Cluster shape from gitcrawl:

- total members: 10
- issues: 10
- pull requests: 0
- open candidates in local store: 10
- representative: #86105, currently open in local store
- latest member update: 2026-06-14T04:46:07.031131Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #86105 [Feature]: Channel Broker consolidation program for maintained chat channels
- #86107 [Feature]: Channel Broker Phase 1 - protocol, bundled broker plugin, and conformance baseline
- #86108 [Feature]: Channel Broker Phase 2 - Telegram, Discord, and Slack migration proof
- #86109 [Feature]: Channel Broker Phase 2A - broker conformance harness
- #86110 [Feature]: Channel Broker Phase 2B - Telegram opt-in broker routing proof
- #86111 [Feature]: Channel Broker Phase 2C - Discord opt-in broker routing proof
- #86112 [Feature]: Channel Broker Phase 2D - Slack opt-in broker routing proof
- #86113 [Feature]: Channel Broker Phase 3 - official app/API channels
- #86114 [Feature]: Channel Broker Phase 4 - constrained/device-bound channels
- #86115 [Feature]: Freeze legacy channel plugins after broker migration paths exist
