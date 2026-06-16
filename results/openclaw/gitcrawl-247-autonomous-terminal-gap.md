---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-247-autonomous-terminal-gap"
mode: "autonomous"
run_id: "27623442089"
workflow_run_id: "27623442089"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27623442089"
head_sha: "c581a46e2e3e5a962635976dc02b3902304668dd"
workflow_conclusion: "success"
result_status: "needs_human"
published_at: "2026-06-16T14:15:48.716Z"
canonical: "https://github.com/openclaw/openclaw/issues/90941"
canonical_issue: "https://github.com/openclaw/openclaw/issues/90941"
canonical_pr: "https://github.com/openclaw/openclaw/pull/90942"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# gitcrawl-247-autonomous-terminal-gap

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27623442089](https://github.com/openclaw/clownfish/actions/runs/27623442089)

Workflow conclusion: success

Worker result: needs_human

Canonical: https://github.com/openclaw/openclaw/issues/90941

## Summary

Canonical family is #90941 with linked implementation PR #90942. #90951 is related but not a duplicate: current main still has the package-install setup-script gap, and the artifact shows that resolving it requires a maintainer product/release decision rather than dedupe closeout or a narrow autonomous fix.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 3 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 1 |

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
| #90941 | keep_canonical | planned | canonical | #90941 remains the best live canonical issue for the symlinked launcher lookup bug; closeout is blocked until the canonical fix path lands. |
| #90942 | keep_canonical | skipped | canonical | Existing-overlap PR is evidence for the canonical path, but this worker should not merge, repair, close, or comment on it from this cluster. |
| #90951 | needs_human | planned | needs_human | Maintainer direction is required before automation chooses whether to ship setup scripts, add a different package-safe repair path, or document package installs as not supporting sandbox image auto-build. |

## Needs Human

- #90951 needs a maintainer product/release decision: whether package installs should ship sandbox setup scripts, provide an alternate doctor repair path, or explicitly leave npm-package sandbox image auto-build unsupported.
