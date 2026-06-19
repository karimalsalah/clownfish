---
repo: "openclaw/openclaw"
cluster_id: "repair-test-projects-routing-baseline-20260619"
mode: plan
allowed_actions:
  - fix
  - raise_pr
blocked_actions:
  - comment
  - label
  - close
  - merge
  - force_push
  - bypass_checks
require_human_for:
  - security_sensitive
  - broad_code_delta
  - unclear_canonical
canonical:
  - "#88551"
candidates:
  - "#88551"
cluster_refs:
  - "#88551"
allow_instant_close: false
allow_fix_pr: true
allow_merge: false
allow_post_merge_close: false
require_fix_before_close: true
security_policy: central_security_only
security_sensitive: false
source: "ci_baseline_repair"
target_branch: "clownfish/repair-test-projects-routing-baseline-20260619"
---

# Repair Test Project Routing Baseline

## Scope

Investigate the current `checks-node-core-tooling` failure blocking #88551. The
PR itself changes only agent command and model fallback files; do not repair or
rebase that contributor branch in this job.

Live failure evidence points to
`src/scripts/test-projects.test.ts > routes top-level test helpers to importing
repo tests`: the repository contains
`test/scripts/openai-chat-tools-client.test.ts`, while the expected route list
is missing that entry.

## Goal

Re-fetch current main and determine whether this is still a standalone baseline
failure. If it is, produce a narrow executable artifact for a new credited
maintenance PR that fixes only the routing expectation and its necessary
focused tests. Do not include #88551 in the patch or mutate GitHub from this
plan-only job.

## Guardrails

- Verify the failure against current main before proposing a fix.
- Do not edit #88551 or any contributor branch.
- Do not touch auth, security boundaries, workflows, docs, generated files, or
  unrelated test routing.
- If the correction needs more than the focused routing source/test surface,
  return a blocked artifact with exact paths and reason.
