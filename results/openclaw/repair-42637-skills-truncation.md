---
repo: "openclaw/openclaw"
cluster_id: "repair-42637-skills-truncation"
mode: "autonomous"
run_id: "27695263550"
workflow_run_id: "27695263550"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27695263550"
head_sha: "1366544d8535d1e8b91c78cfc9cfc248af86e4f1"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T14:15:52.090Z"
canonical: "https://github.com/openclaw/openclaw/pull/42637"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/42637"
actions_total: 3
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 1
---

# repair-42637-skills-truncation

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27695263550](https://github.com/openclaw/clownfish/actions/runs/27695263550)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/42637

## Summary

#42637 must be quarantined to central OpenClaw security handling because the hydrated review material contains security-shaped prompt-injection findings on the canonical PR. #88426 overlaps the compact skills prompt surface but remains a distinct compact-description change and should stay open as related. The cluster-level repair path is blocked because the requested fix work depends on the quarantined #42637 security decision, so no executable non-security fix artifact is safe from the provided artifacts.

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

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
| _None_ |  |  |  |  |  |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #42637 | route_security | planned | security_sensitive | Route exact security-sensitive PR #42637 to central OpenClaw security handling without GitHub mutation. |
| #88426 | keep_related | planned | related | Related overlapping prompt-budget work, but not the canonical fix for #42637. |
| cluster:repair-42637-skills-truncation | needs_human | blocked | needs_human | Central security triage must decide whether and how #42637 can be repaired before any ordinary Clownfish fix branch or PR is planned. |

## Needs Human

- Central OpenClaw security triage must decide the handling for #42637 before ordinary repair work continues, because the canonical fix path depends on security-shaped prompt-injection review findings.
