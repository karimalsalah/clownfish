---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-804-refreshed-cluster-wave"
mode: "plan"
run_id: "27748373456"
workflow_run_id: "27748373456"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27748373456"
head_sha: "9806b5ae9d26b70b54504bfaa09dfefcb6f65e7b"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-18T08:58:35.329Z"
canonical: "#77610"
canonical_issue: "#77610"
canonical_pr: null
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-804-refreshed-cluster-wave

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27748373456](https://github.com/openclaw/clownfish/actions/runs/27748373456)

Workflow conclusion: success

Worker result: planned

Canonical: #77610

## Summary

Classified both open hydrated issues in read-only plan mode. #77610 remains the best live canonical for the macOS repeated-spawn EBADF report. #77750 is related but not a duplicate because it reports EBADF under a high file-descriptor-table condition with a different suspected cause and remediation path.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 0 |
| Apply skipped | 0 |
| Needs human | 0 |

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #77610 | keep_canonical | planned | canonical | #77610 is open, hydrated, non-security-sensitive, and remains the representative canonical for the repeated-spawn macOS EBADF failure described by the job. |
| #77750 | keep_related | planned | related | #77750 belongs near #77610 as an exec/spawn EBADF issue, but it has unique high-FD reproduction details and a distinct suspected fix path, so duplicate closure would be unsafe. |

## Needs Human

- none
