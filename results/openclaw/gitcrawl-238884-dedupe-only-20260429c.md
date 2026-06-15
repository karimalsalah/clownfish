---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238884-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104071504"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104071504"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.411Z"
canonical: "https://github.com/openclaw/openclaw/pull/62195"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/62195"
actions_total: 5
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238884-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104071504](https://github.com/openclaw/clownfish/actions/runs/25104071504)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/62195

## Summary

Classified #62195 as the canonical preHook PR, kept #45465/#9465 open as related broader lifecycle-hook work, skipped already-closed #45129, and quarantined the linked security-sensitive #17529 without blocking unrelated non-security classification.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 5 |
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

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #62195 | keep_canonical | planned | canonical | Best live canonical for the preHook gate family; no merge or fix action is allowed in this job. |
| #45465 | keep_related | planned | related | Related broader lifecycle-hooks work should stay open; it is not a high-confidence duplicate of #62195. |
| #45129 | keep_closed | skipped | superseded | Historical closed candidate only; no mutation planned. |
| #9465 | keep_related | planned | related | Open related feature request with broader scope than the canonical PR. |
| #17529 | route_security | planned | security_sensitive | Route the flagged security-sensitive linked ref to central OpenClaw security handling without affecting #62195/#45465 classification. |

## Needs Human

- none
