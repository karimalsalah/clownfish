---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238788-dedupe-only-20260429"
mode: "autonomous"
run_id: "25103788374"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25103788374"
head_sha: "98c86abfe56e7ca0578fd667fdea3121315c5b1d"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.360Z"
canonical: "https://github.com/openclaw/openclaw/issues/38853"
canonical_issue: "https://github.com/openclaw/openclaw/issues/38853"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73395"
actions_total: 11
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238788-dedupe-only-20260429

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25103788374](https://github.com/openclaw/clownfish/actions/runs/25103788374)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/issues/38853

## Summary

Representative #57291 is already closed as fixed on main. The only surviving open issue in this cluster is #38853, which is a related but distinct Discord REST Cloudflare/Error 1015 cooldown bug with open candidate PR #73395. No close actions are safe: #38853 must stay open until #73395 or an equivalent fix lands, and #73395 has failing checks plus unresolved bot review findings.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 11 |
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
| #38853 | keep_canonical | planned | canonical | Keep #38853 open as the current canonical issue for the remaining Cloudflare HTML 429 Discord REST cooldown work. |
| #57111 | keep_closed | skipped | duplicate | Historical duplicate context only; no mutation planned. |
| #57195 | keep_closed | skipped | duplicate | Historical duplicate context only; no mutation planned. |
| #57291 | keep_closed | skipped | canonical | Prior canonical for the stale-socket crash family is already closed as fixed on main. |
| #57666 | keep_closed | skipped | duplicate | Historical duplicate context only; no mutation planned. |
| #57731 | keep_closed | skipped | related | Closed related issue with a distinct stale-health symptom; no mutation planned. |
| #58173 | keep_closed | skipped | related | Closed related context for Discord retry behavior; no mutation planned. |
| #59927 | keep_closed | skipped | duplicate | Historical duplicate context only; no mutation planned. |
| #61124 | keep_closed | skipped | duplicate | Historical duplicate context only; no mutation planned. |
| #64201 | keep_closed | skipped | independent | Closed independent crash-loop context; no mutation planned. |
| #73395 | keep_related | planned | fixed_by_candidate | Keep #73395 open as the candidate fix path for #38853, but do not close #38853 or recommend merge until failed checks and review-bot findings are resolved. |

## Needs Human

- none
