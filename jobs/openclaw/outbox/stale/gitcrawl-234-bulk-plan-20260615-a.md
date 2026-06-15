---
repo: openclaw/openclaw
cluster_id: gitcrawl-234-bulk-plan-20260615-a
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
  - "#65437"
cluster_refs:
  - "#65437"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#51245"
  - "#53198"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #53198 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 234 on 2026-06-15. Existing-overlap refs #51245, #53198 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 234

Generated from local gitcrawl run cluster 234 for `openclaw/openclaw`.

Display title:

> [Bug]: Discord elevated allowFrom fallback from channels.discord.allowFrom does not work on 2026.3.22

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #51245, #53198
- representative: #53198, currently open in local store
- latest member update: 2026-06-14T04:46:06.528395Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #65437 [Bug]: tools.elevated.allowFrom.slack silently blocked by commandAuthorized gate — no documented fallback for Slack

Existing-overlap context refs:

- #51245 [Bug]: Telegram slash sessions still resolve to channel=(unknown), causing elevated allowFrom checks to fail on 2026.3.13
- #53198 [Bug]: Discord elevated allowFrom fallback from channels.discord.allowFrom does not work on 2026.3.22
