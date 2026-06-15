---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-8-bulk-plan-20260615-a"
mode: "plan"
run_id: "178151418604"
run_url: null
head_sha: null
workflow_conclusion: null
result_status: "planned"
published_at: "2026-06-15T09:03:06.356Z"
canonical: null
canonical_issue: null
canonical_pr: null
actions_total: 40
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-8-bulk-plan-20260615-a

Repo: openclaw/openclaw

Run: unknown

Workflow conclusion: unknown

Worker result: planned

Canonical: unknown

## Summary

Plan-only classification. The hinted representative #89622 is already closed and superseded by hydrated landed #92896, so there is no single open live canonical for the full cluster. The cluster splits into related tool-schema hardening subfamilies; security-signal refs are routed, closed candidates stay closed, and open non-security drafts are kept related rather than closed or merged because the job blocks merge/fix work and several drafts have review-bot findings, draft state, unknown mergeability, or distinct surfaces.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 40 |
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
| #88977 | keep_related | planned | related | Related broad runtime/provider hardening; not safe to close or merge as the canonical path in this plan job. |
| #89076 | keep_related | planned | related | Keep as related system-prompt-report hardening; do not collapse into the Anthropic canonical. |
| #89077 | keep_related | planned | related | Related diagnostic-hardening PR with distinct scope. |
| #89082 | keep_related | planned | related | Related adapter hardening, but review findings block stronger action. |
| #89089 | keep_related | planned | related | Related Tool Search catalog hardening, not a duplicate of the Anthropic canonical. |
| #89113 | keep_related | planned | related | Related normalized-runtime-tool hardening; compatibility risk and review findings block merge/closeout. |
| #89119 | keep_related | planned | related | Keep related within provider-diagnostics subfamily. |
| #89141 | keep_related | planned | related | Related narrow diagnostic hardening. |
| #89221 | keep_closed | skipped | superseded | Already closed; no closure action is valid. |
| #89229 | keep_closed | skipped | superseded | Already closed and superseded by landed Anthropic canonical. |
| #89266 | keep_related | planned | related | Keep related; no close or merge action. |
| #89270 | keep_related | planned | related | Keep related diagnostic-log hardening. |
| #89275 | keep_related | planned | related | Keep related normalized-tool hardening. |
| #89312 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling. |
| #89458 | route_security | planned | security_sensitive | Route because the job explicitly requires security-signal quarantine for this ref. |
| #89468 | keep_related | planned | related | Keep related Tool Search hardening. |
| #89499 | keep_related | planned | related | Keep related quarantine-diagnostics hardening. |
| #89539 | keep_related | planned | related | Keep related; broad-ish delta and review findings block stronger action. |
| #89565 | keep_related | planned | related | Keep related; no single canonical for system-prompt hardening is established. |
| #89582 | keep_related | planned | related | Keep related; no closure or merge recommendation. |
| #89592 | route_security | planned | security_sensitive | Quarantine this exact PR for central OpenClaw security handling. |
| #89603 | keep_related | planned | related | Keep related broad runtime quarantine work. |
| #89620 | keep_related | planned | related | Keep related system-prompt schema-stat hardening. |
| #89622 | keep_closed | skipped | superseded | Representative is no longer open; keep closed and do not emit a close action. |
| #89627 | keep_related | planned | related | Keep related; not duplicate of provider payload fixes. |
| #89669 | keep_related | planned | related | Keep related provider-hook hardening. |
| #89699 | keep_related | planned | related | Keep related client-tool hardening without routing the whole cluster. |
| #89717 | keep_related | planned | related | Keep related wrapper-descriptor hardening; review findings block stronger action. |
| #90197 | keep_related | planned | related | Keep related; maintainer/product acceptance is needed before any merge path, but classification is clear. |
| #90219 | keep_related | planned | related | Keep related wrapped-tool schema hardening. |
| #90224 | keep_related | planned | related | Keep related; no closure action in read-only plan. |
| #90228 | keep_closed | skipped | superseded | Already closed and superseded by landed Anthropic canonical. |
| #90262 | keep_related | planned | related | Keep related adapter/schema hardening. |
| #90265 | keep_related | planned | related | Keep related system-prompt schema-stat hardening. |
| #90274 | keep_related | planned | related | Keep related wrapped session-tool hardening. |
| #90278 | keep_closed | skipped | superseded | Already closed and superseded by landed Anthropic canonical. |
| #90283 | keep_closed | skipped | superseded | Already closed and superseded by landed OpenAI canonical. |
| #90286 | keep_closed | skipped | superseded | Already closed and superseded by landed OpenAI canonical. |
| #90289 | keep_closed | skipped | superseded | Already closed and superseded by landed provider wrapper canonical. |
| #90397 | keep_closed | skipped | superseded | Already closed and superseded by landed OpenAI canonical. |

## Needs Human

- none
