---
repo: openclaw/openclaw
cluster_id: gitcrawl-202-bulk-plan-20260615-a
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
  - "#90158"
candidates:
  - "#90158"
cluster_refs:
  - "#90158"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#56284"
  - "#63491"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
canonical_hint: "gitcrawl representative #90158 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 202 on 2026-06-15. Existing-overlap refs #56284, #63491 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 202

Generated from local gitcrawl run cluster 202 for `openclaw/openclaw`.

Display title:

> Gateway self-restart on Windows fails silently when schtasks /Run cannot relaunch the scheduled task

Cluster shape from gitcrawl:

- total members: 3
- issues: 3
- pull requests: 0
- open candidates in local store: 1
- excluded existing-overlap refs: #56284, #63491
- representative: #90158, currently open in local store
- latest member update: 2026-06-14T04:46:06.462294Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #90158 Gateway self-restart on Windows fails silently when schtasks /Run cannot relaunch the scheduled task

Existing-overlap context refs:

- #56284 Windows: gateway restart does not wait for active tasks and loses session state
- #63491 [Bug]: Windows Scheduled Task gateway restart/health becomes inconsistent after ready
