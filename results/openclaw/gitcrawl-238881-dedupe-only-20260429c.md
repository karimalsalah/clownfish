---
repo: "openclaw/openclaw"
cluster_id: "gitcrawl-238881-dedupe-only-20260429c"
mode: "autonomous"
run_id: "25104064477"
run_url: "https://github.com/openclaw/clownfish/actions/runs/25104064477"
head_sha: "562a0387cfb8012d9de7c90b4ae662dc281c2fff"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T03:54:22.406Z"
canonical: "https://github.com/openclaw/openclaw/pull/73799"
canonical_issue: "https://github.com/openclaw/openclaw/issues/54176"
canonical_pr: "https://github.com/openclaw/openclaw/pull/73799"
actions_total: 8
fix_executed: 0
fix_failed: 0
fix_blocked: 0
apply_executed: 0
apply_blocked: 0
apply_skipped: 0
needs_human_count: 0
---

# gitcrawl-238881-dedupe-only-20260429c

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/25104064477](https://github.com/openclaw/clownfish/actions/runs/25104064477)

Workflow conclusion: success

Worker result: planned

Canonical: https://github.com/openclaw/openclaw/pull/73799

## Summary

Hydrated state makes #73799 the current canonical open PR for the legacy .doc/OLE binary MIME guard. #54380 and #44068 are already closed or superseded, #54176 remains open until the canonical fix lands, and security-linked #9795 is quarantined without blocking the non-security classification. No close, merge, or fix mutations are emitted.

## Impact

| Metric | Count |
| --- | ---: |
| Worker actions | 8 |
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
| #9795 | route_security | planned | security_sensitive | Security-sensitive sanitizer report is outside Clownfish dedupe closeout and should route to central OpenClaw security handling. |
| #44068 | keep_closed | skipped | superseded | Already closed; closed refs are evidence only and must not receive another close action. |
| #54176 | keep_canonical | planned | canonical | Canonical bug issue should remain open until #73799 or an equivalent fix lands. |
| #54190 | keep_closed | skipped | superseded | Already closed as superseded; no mutation is valid for this closed ref. |
| #54234 | keep_closed | skipped | superseded | Historical closed PR in the same fix family; no close action is valid. |
| #54380 | keep_closed | skipped | superseded | Representative is obsolete because it was replaced by #73799. |
| #73229 | keep_closed | skipped | independent | Independent closed sanitizer PR outside this legacy Word/OLE dedupe family. |
| #73799 | keep_canonical | planned | canonical | Current canonical open PR; keep it open for maintainer or applicator follow-up rather than closing or merging in this dedupe-only job. |

## Needs Human

- none
