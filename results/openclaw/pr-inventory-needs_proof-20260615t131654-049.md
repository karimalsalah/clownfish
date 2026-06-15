---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-needs_proof-20260615T131654-049"
mode: "plan"
run_id: "27552746237"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27552746237"
head_sha: "6219e4cb8ba01b5666ea86632936d90d53200623"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T14:25:19.106Z"
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
needs_human_count: 1
---

# pr-inventory-needs_proof-20260615T131654-049

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27552746237](https://github.com/openclaw/clownfish/actions/runs/27552746237)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-mode PR inventory classification. No shared canonical was selected; each listed PR was classified independently from the hydrated preflight artifact. Security-sensitive open PRs are routed to central security handling; already-closed PRs are kept closed; merge/close/fix actions are not planned because this shard is proof inventory and fix/merge are blocked by job frontmatter.

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
| Needs human | 1 |

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
| #91279 | keep_independent | planned | independent | Standalone proof-needed UI PR; keep for normal maintainer review rather than dedupe cleanup. |
| #91280 | keep_independent | planned | independent | Active standalone CLI PR with proof/dirty-branch blockers; no closeout classification is safe. |
| #91286 | route_security | planned | security_sensitive | Security-boundary-shaped exec approval change; route only this PR to central OpenClaw security handling. |
| #91288 | route_security | planned | security_sensitive | Security-boundary-shaped exec approval change; route only this PR to central OpenClaw security handling. |
| #93226 | keep_independent | planned | independent | Standalone provider-status PR; keep for proof and maintainer review. |
| #39102 | route_security | planned | security_sensitive | A2A/session visibility policy change crosses a security boundary; route only this PR. |
| #92700 | keep_independent | planned | independent | Related to Windows encoding work but not a duplicate of the closed exec-output PR. |
| #91943 | keep_independent | planned | independent | Standalone channel behavior PR; keep for proof review. |
| #82540 | keep_independent | planned | independent | Potentially useful standalone PR, not a dedupe/close candidate in this shard. |
| #50483 | keep_independent | planned | independent | Broad standalone iOS PR with proof and branch blockers; keep for maintainer repair/review. |
| #54585 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #55341 | route_security | planned | security_sensitive | Credential/token persistence work is security-sensitive; route only this PR. |
| #93271 | route_security | planned | security_sensitive | Security-audit/session-key boundary work belongs in central security handling. |
| #93266 | keep_independent | planned | independent | Standalone channel queue PR still needs real proof; keep for normal review. |
| #89238 | needs_human | planned | needs_human | This has explicit maintainer-review signal, so a human should decide next steps rather than inventory cleanup. |
| #55927 | keep_independent | planned | independent | Useful but blocked standalone UI feature PR; keep open. |
| #56357 | route_security | planned | security_sensitive | CSP/avatar endpoint hardening is security-boundary-shaped; route only this PR. |
| #56398 | keep_independent | planned | independent | Useful uneditable/stale contributor PR, but fix/raise_pr is blocked in this job; keep independent. |
| #56706 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #56720 | keep_independent | planned | independent | Standalone hooks PR requiring proof/CI follow-up; keep open. |
| #60229 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #60485 | keep_closed | skipped | security_sensitive | Already closed security-sensitive PR; keep as historical context only. |
| #60630 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #93273 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #60683 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #60698 | keep_closed | skipped | security_sensitive | Already closed security-sensitive PR; keep as historical context only. |
| #60868 | keep_closed | skipped | security_sensitive | Already closed security-sensitive PR; keep as historical context only. |
| #60934 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #60981 | route_security | planned | security_sensitive | Filesystem access-control boundary work must route to central security handling. |
| #61242 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #61322 | keep_independent | planned | independent | Standalone sessions bugfix PR requiring proof and review follow-up. |
| #61576 | route_security | planned | security_sensitive | New companion app/auth-boundary work should route to central security handling. |
| #61624 | keep_independent | planned | independent | Standalone channel feature PR; keep open for proof/repair rather than cleanup-close. |
| #93267 | keep_independent | planned | independent | Standalone session-memory PR; keep for proof review. |
| #61675 | keep_independent | planned | independent | Standalone hooks/session-state feature PR with proof and review blockers. |
| #61973 | keep_closed | skipped | superseded | Already closed; no mutation is valid. |
| #62021 | keep_closed | skipped | fixed_by_candidate | Already closed; no mutation is valid. |
| #62157 | keep_independent | planned | independent | Standalone message-delivery PR requiring proof and review follow-up. |
| #62201 | keep_closed | skipped | security_sensitive | Already closed security-sensitive PR; keep as historical context only. |
| #62338 | keep_independent | planned | independent | Standalone diagnostic PR; keep open for maintainer repair/proof review. |

## Needs Human

- #89238 has proof-sufficient/ready-for-maintainer-look signal and ClawSweeper explicitly requests maintainer review before merge; inventory cleanup should not decide it.
