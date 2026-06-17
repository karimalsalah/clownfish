---
repo: "openclaw/openclaw"
cluster_id: "repair-54904-single-replan-wave-20260617"
mode: "autonomous"
run_id: "27712770853"
workflow_run_id: "27712770853"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27712770853"
head_sha: "94e2275ca691b2dcc23caa190af1fffc491d6b32"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-17T19:18:50.469Z"
canonical: "https://github.com/openclaw/openclaw/pull/54904"
canonical_issue: null
canonical_pr: "https://github.com/openclaw/openclaw/pull/54904"
actions_total: 6
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 1
apply_skipped: 0
needs_human_count: 0
---

# repair-54904-single-replan-wave-20260617

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27712770853](https://github.com/openclaw/clownfish/actions/runs/27712770853)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/54904

## Summary

Planned a narrow repair of canonical PR #54904 on the contributor branch. Current main at 7019da8c7bb18f9f85536f86a977dd89cd4c0984 still reads Feishu webhookPath but does not compare request targets before guards, body parsing, signature validation, or dispatch. The hydrated artifact shows #54904 is open, maintainer-editable, focused to two Feishu files, and its earlier Greptile/Codex review findings were addressed by author follow-up, but a fresh review/validation pass is still needed before any merge path. No GitHub mutations were performed.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 6 |
| Fix executed | 0 |
| Fix failed | 0 |
| Fix blocked | 0 |
| Applied executions | 0 |
| Apply blocked | 1 |
| Apply skipped | 0 |
| Needs human | 0 |

## Repair Candidate

```json
{
  "target": "#54904",
  "source_refs": [
    "#54904",
    "#54841",
    "#54908",
    "#54593",
    "#54758"
  ],
  "repair_strategy": "repair_contributor_branch",
  "planned_actions": [
    "fix_needed",
    "build_fix_artifact"
  ],
  "summary": "Repair PR #54904 in place on ruanrrn's branch so Feishu webhook mode enforces the configured webhookPath before rate-limit/content-type/body/signature/dispatch work. Keep the implementation narrow: normalize the configured path with the existing plugin SDK helper, parse only origin-form raw request targets without URL canonicalization, return 400 for malformed/non-origin request targets, return 404 for mismatched paths, preserve query-string acceptance for the configured path, and keep focused regression tests.",
  "pr_title": "fix(feishu): enforce configured webhookPath",
  "pr_body": "## Summary\n- Repair and refresh contributor PR #54904 by @ruanrrn.\n- Enforce the configured Feishu `webhookPath` before webhook guards, body parsing, signature validation, challenge handling, or event dispatch.\n- Keep request-target parsing raw and origin-form only so absolute-form, network-path, and dot-segment crafted targets cannot be canonicalized into the configured path.\n\n## Review blockers to verify\n- Greptile redundant fallback comment is gone or non-actionable.\n- Codex normalization comment is handled with `normalizeWebhookPath`/webhook-ingress helper behavior.\n- Codex malformed absolute-form parsing comment is handled with a 400 response instead of throwing.\n- Codex network-path target comment is handled by rejecting targets such as `//host/path` before matching.\n- Add or keep coverage for dot-segment raw mismatch, since #54908's review noted `/wrong/../expected-feishu-hook` must not be canonicalized into a match.\n- ClawSweeper's stored-data-model note should be proven non-actionable because the only detected path is a test file, not runtime persisted state.\n\n## Verification\n- `node scripts/run-vitest.mjs extensions/feishu/src/monitor.transport.test.ts`\n- `node scripts/run-oxlint.mjs extensions/feishu/src/monitor.transport.ts extensions/feishu/src/monitor.transport.test.ts`\n- `pnpm check:changed`\n- Fresh Codex `/review` before merge consideration.\n\nRefs: #54904, #54841. Credit: original implementation by @ruanrrn in https://github.com/openclaw/openclaw/pull/54904; related closed source idea from @a77ming in https://github.com/openclaw/openclaw/pull/54908.",
  "likely_files": [
    "extensions/feishu/src/monitor.transport.ts",
    "extensions/feishu/src/monitor.transport.test.ts"
  ],
  "validation_commands": [
    "node scripts/run-vitest.mjs extensions/feishu/src/monitor.transport.test.ts",
    "node scripts/run-oxlint.mjs extensions/feishu/src/monitor.transport.ts extensions/feishu/src/monitor.transport.test.ts",
    "pnpm check:changed"
  ],
  "credit_notes": [
    "Preserve contributor credit for @ruanrrn as the author of #54904 and keep source PR https://github.com/openclaw/openclaw/pull/54904 in the PR body/release-note context.",
    "Mention that prior closed PR https://github.com/openclaw/openclaw/pull/54908 by @a77ming covered the same webhook-path idea but is closed/uneditable and had a remaining dot-segment review concern; do not close or mutate it."
  ],
  "source_job": "jobs/openclaw/inbox/repair-54904-single-replan-wave-20260617.md",
  "security_sensitive": false,
  "security_routed_refs": [
    "#54841"
  ],
  "needs_human": [],
  "repair_status": "pushed",
  "terminal": true
}
```

## Fix Execution Actions

| Action | Status | Target | Branch | Reason |
| --- | --- | --- | --- | --- |
| repair_contributor_branch | pushed | https://github.com/openclaw/openclaw/pull/54904 |  |  |

## Apply Actions

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54904 | merge_canonical | blocked | fix_pr | job does not allow merge |

## Apply Audit

| Attempt | Source | Target | Action | Status | Reason |
| --- | --- | --- | --- | --- |
|  | post_flight | #54904 | merge_canonical | blocked | job does not allow merge |

## Worker Action Matrix

| Target | Action | Status | Classification | Reason |
| --- | --- | --- | --- | --- |
| #54904 | fix_needed | planned | canonical | Repair the existing maintainer-editable contributor PR branch; do not close, comment, label, or merge because those actions are blocked by the job. |
| cluster:repair-54904-single-replan-wave-20260617 | build_fix_artifact | planned |  | Fix-enabled job with allow_fix_pr=true requires an executable artifact for the canonical PR repair path. |
| #54841 | route_security | planned | security_sensitive | Central security handling is required for the exact hydrated security-sensitive issue. |
| #54593 | keep_independent | planned | independent | Out of scope for the isolated #54904 Feishu repair cluster. |
| #54758 | keep_independent | planned | independent | Out of scope for the isolated #54904 Feishu repair cluster. |
| #54908 | keep_closed | skipped | superseded | Already-closed refs must not receive closure actions. |

## Needs Human

- none
