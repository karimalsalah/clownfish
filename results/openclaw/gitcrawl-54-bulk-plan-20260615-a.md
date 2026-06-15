---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-54-bulk-plan-20260615-a"
mode: "plan"
run_id: "27521481701"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27521481701"
head_sha: "c7fde105fe4b1bf849faf5ed130f10118614c64c"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:58:15.002Z"
canonical: null
canonical_issue: null
canonical_pr: "#91660"
actions_total: 12
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-54-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27521481701](https://github.com/openclaw/clownfish/actions/runs/27521481701)

Workflow conclusion: success

Worker result: planned

Canonical: #91660

## Summary

Plan-only classification for hydrated cluster refs. The hinted representative #91596 and security-signal refs #91001, #91010, #91170, and #91596 are routed to central security handling per the job notes. The remaining non-security items split into separate memory-index identity subfamilies: #91660 is the clearest open provider.model backfill PR, #90447 is superseded by already-merged #90816, and local modelPath follow-up PRs remain related but not merge/close candidates in this plan.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 12 |
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
| #90042 | keep_related | planned | related | Same provider.model dirty-index family as #91660, but with unique reproduction details and remaining scope. |
| #90413 | keep_closed | skipped | fixed_by_candidate | Already closed; no close action is valid. |
| #90447 | close_superseded | planned | superseded | Open PR is superseded by hydrated merged PR #90816 for the same adapter-default blank-model status identity repair. |
| #90787 | keep_related | planned | related | Related symptom family, separate root cause and product decision. |
| #90816 | keep_closed | skipped | canonical | Historical merged canonical for the adapter-default blank-model subfamily; no mutation valid. |
| #91001 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; route to central OpenClaw security handling without ProjectClownfish close/merge/fix action. |
| #91010 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; no ProjectClownfish mutation. |
| #91170 | route_security | planned | security_sensitive | Exact job-listed security-signal ref; closed state is historical evidence only. |
| #91596 | route_security | planned | security_sensitive | Hinted canonical is an exact job-listed security-signal ref, so it cannot be the ProjectClownfish mutation canonical. |
| #91660 | keep_canonical | planned | canonical | Best open non-security canonical for the provider.model backfill subfamily, but merge is blocked by plan mode and missing merge preflight. |
| #91691 | keep_related | planned | related | Related empty-model hardening path with unresolved review/proof blockers; not safe for closure or merge. |
| #91706 | keep_related | planned | related | Non-security related local-modelPath PR, but it is not close/merge-ready and its closest canonical family refs are routed security-signal items. |

## Needs Human

- none
