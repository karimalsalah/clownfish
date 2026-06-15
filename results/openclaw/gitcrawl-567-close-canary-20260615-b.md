---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-567-close-canary-20260615-b"
mode: "execute"
run_id: "27525738894"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27525738894"
head_sha: "2b61308f8c476cf270b0b873bae98180a1d56075"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T05:22:29.076Z"
canonical: "#84545"
canonical_issue: null
canonical_pr: "#84545"
actions_total: 2
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 1
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-567-close-canary-20260615-b

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27525738894](https://github.com/openclaw/clownfish/actions/runs/27525738894)

Workflow conclusion: success

Worker result: planned

Canonical: #84545

## Summary

Classified #84545 as the canonical Gemini 3.5 Flash forward-compat resolver PR and #91546 as superseded by that canonical path. No merge or fix PR is proposed because this execute-mode job only allows comment/label/close actions and merge/fix actions are blocked.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 2 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 1 |
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
| #91546 | close_superseded | executed | superseded | already closed with matching projectclownfish comment |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #84545 | keep_canonical | planned | canonical | Best surviving canonical path for the shared Gemini 3.5 Flash resolver work. |
| #91546 | close_superseded | planned | superseded | Superseded by the hydrated canonical PR #84545; unique static catalog contribution is preserved as attribution/follow-up context. |

## Needs Human

- none
