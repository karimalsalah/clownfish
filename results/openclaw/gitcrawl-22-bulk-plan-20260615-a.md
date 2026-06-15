---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-22-bulk-plan-20260615-a"
mode: "plan"
run_id: "27520848196"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27520848196"
head_sha: "872a0ab6af9f5f189014062d7bd0a2367b003dde"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T02:56:52.524Z"
canonical: "#91240"
canonical_issue: "#91099"
canonical_pr: "#91240"
actions_total: 24
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-22-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27520848196](https://github.com/openclaw/clownfish/actions/runs/27520848196)

Workflow conclusion: success

Worker result: planned

Canonical: #91240

## Summary

Plan-mode classification for 24 candidate refs. The original representative #92520 is open but security-routed, so it is not used as the non-security canonical. The clearest non-security canonical path in this mixed cluster is #91240 for the #91099 status-auth-label bug. Security-signal refs are quarantined with route_security and unrelated non-security items are kept related or closed-only as appropriate.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 24 |
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
| #75030 | route_security | planned | security_sensitive | Security-signal quarantine only; no close, label, merge, or fix action. |
| #76690 | keep_related | planned | related | Related OpenAI/Codex OAuth routing area, but it is an image-generation product/route decision, not the #91240 status-auth-label root cause. |
| #81777 | keep_related | planned | related | Same Codex app-server neighborhood but broad independent feature/fix scope; not a duplicate of the status-auth canonical. |
| #81865 | route_security | planned | security_sensitive | Security-signal quarantine only; continue classifying unrelated items. |
| #83383 | keep_related | planned | related | Related auth diagnostics work, but it does not fix the #91099/#91240 status label bug. |
| #83639 | keep_closed | skipped | fixed_by_candidate | Already closed refs must not receive close actions. |
| #83665 | route_security | planned | security_sensitive | Security-signal quarantine only; no merge or close recommendation. |
| #86556 | keep_related | planned | related | Related Codex app-server lifecycle work, independent from status-auth labeling. |
| #87168 | keep_closed | skipped | fixed_by_candidate | Already closed issue; no further close action. |
| #87872 | keep_related | planned | related | Related usage/accounting surface but a different root cause from status auth label rendering. |
| #88906 | keep_related | planned | related | Related OpenAI/Codex routing work, not the status auth label canonical. |
| #89133 | keep_related | planned | related | Overlapping Spark routing PR; keep related rather than supersede-close in plan mode. |
| #89491 | route_security | planned | security_sensitive | Security-sensitive item belongs to central OpenClaw security handling. |
| #90074 | route_security | planned | security_sensitive | Security-signal quarantine only; product-routing details should not be mutated by this worker. |
| #90356 | route_security | planned | security_sensitive | Security-signal quarantine only; no merge/close action. |
| #91055 | route_security | planned | security_sensitive | Security-signal quarantine only; no merge/close action. |
| #91099 | keep_related | planned | fixed_by_candidate | Covered by open candidate #91240, but do not close before the fix is merged. |
| #91240 | keep_canonical | planned | canonical | Best hydrated non-security canonical for the status-auth-label subcluster. |
| #91767 | route_security | planned | security_sensitive | Security-signal record; non-mutating route only. |
| #92227 | keep_related | planned | related | Related app-server auth behavior but independent from the status-auth canonical. |
| #92506 | keep_related | planned | related | Related status/usage regression; keep open because the linked fix is quarantined and not mergeable by this worker. |
| #92520 | route_security | planned | security_sensitive | Original representative is open but quarantined; it cannot be canonical for non-security cleanup. |
| #92610 | route_security | planned | security_sensitive | Security-signal quarantine only; no merge/close action. |
| #92824 | keep_closed | skipped | fixed_by_candidate | Already closed/merged candidate retained only as historical fix evidence. |

## Needs Human

- none
