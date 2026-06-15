---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T223445-061"
mode: "plan"
run_id: "27583353937"
workflow_run_id: "27583353937"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27583353937"
head_sha: "050272f6dd49496aa91726c23dee9ecf061a902f"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T23:55:41.596Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 25
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 13
---

# pr-inventory-needs_proof-20260615T223445-061

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27583353937](https://github.com/openclaw/clownfish/actions/runs/27583353937)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job explicitly says this is not a dedupe cluster. Hydrated open PRs are kept independent for normal maintainer review; the already-closed PR is recorded as skipped; refs with unavailable live state are scoped needs_human items.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 25 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 13 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #75299 | keep_independent | planned | independent |  |
| #76545 | keep_closed | skipped | superseded | Already closed before this plan run. |
| #76668 | keep_independent | planned | independent |  |
| #77053 | keep_independent | planned | independent |  |
| #77067 | keep_independent | planned | independent |  |
| #77312 | keep_independent | planned | independent |  |
| #77393 | keep_independent | planned | independent |  |
| #87961 | keep_independent | planned | independent |  |
| #88114 | keep_independent | planned | independent |  |
| #88426 | keep_independent | planned | independent |  |
| #93391 | keep_independent | planned | independent |  |
| #89602 | keep_independent | planned | independent |  |
| #89688 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR cannot be safely classified beyond needing a refreshed hydration pass. |
| #89693 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92526 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92576 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92135 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92763 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #82540 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92234 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92274 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92346 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92349 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92388 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |
| #92420 | needs_human | blocked | needs_human | Live GitHub state was unavailable in the artifact, so this PR needs refreshed hydration. |

## Needs Human

- #89688: live state unavailable in preflight artifact; refresh hydration before classification.
- #89693: live state unavailable in preflight artifact; refresh hydration before classification.
- #92526: live state unavailable in preflight artifact; refresh hydration before classification.
- #92576: live state unavailable in preflight artifact; refresh hydration before classification.
- #92135: live state unavailable in preflight artifact; refresh hydration before classification.
- #92763: live state unavailable in preflight artifact; refresh hydration before classification.
- #82540: live state unavailable in preflight artifact; refresh hydration before classification.
- #92234: live state unavailable in preflight artifact; refresh hydration before classification.
- #92274: live state unavailable in preflight artifact; refresh hydration before classification.
- #92346: live state unavailable in preflight artifact; refresh hydration before classification.
- #92349: live state unavailable in preflight artifact; refresh hydration before classification.
- #92388: live state unavailable in preflight artifact; refresh hydration before classification.
- #92420: live state unavailable in preflight artifact; refresh hydration before classification.
