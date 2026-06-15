---
repo: "openclaw/openclaw"
cluster_id: "pr-inventory-ready_for_maintainer-20260615T131654-072"
mode: "plan"
run_id: "27552745769"
run_url: "https://github.com/openclaw/clownfish/actions/runs/27552745769"
head_sha: "6219e4cb8ba01b5666ea86632936d90d53200623"
workflow_conclusion: "success"
result_status: "planned"
published_at: "2026-06-15T14:25:19.053Z"
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

# pr-inventory-ready_for_maintainer-20260615T131654-072

Repo: openclaw/openclaw

Run: [https://github.com/openclaw/clownfish/actions/runs/27552745769](https://github.com/openclaw/clownfish/actions/runs/27552745769)

Workflow conclusion: success

Worker result: planned

Canonical: unknown

## Summary

Plan-only PR inventory classification. No shared canonical was selected because the job is an independent ready-for-maintainer shard. Non-security open PRs are kept independently for normal maintainer review; security-sensitive/auth-secret-boundary candidates are routed to central security handling.

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
| #88449 | keep_independent | planned | independent | Independent open PR; not a duplicate or low-signal close candidate. |
| #88798 | route_security | planned | security_sensitive | Auth-boundary fix linked to a security-sensitive issue. |
| #90968 | keep_independent | planned | independent | Independent open PR requiring author/maintainer follow-up. |
| #93194 | keep_independent | planned | independent | Independent implementation PR with maintainer-review surface, not a dedupe closeout. |
| #92125 | keep_independent | planned | independent | Independent dependency bump awaiting maintainer review. |
| #93225 | keep_independent | planned | independent | Independent dependency bump with compatibility/security-boundary review considerations. |
| #93007 | keep_independent | planned | independent | Independent open feature/fix PR blocked on review findings. |
| #91691 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #88988 | keep_independent | planned | independent | Independent open UX PR; no cluster close action is supported. |
| #78395 | keep_independent | planned | independent | Independent open PR with useful focused code. |
| #91685 | keep_independent | planned | independent | Independent open PR; leave for maintainer review. |
| #84779 | route_security | planned | security_sensitive | Credential/secret exposure handling is outside Clownfish backlog cleanup. |
| #87504 | keep_independent | planned | independent | Independent open PR awaiting normal maintainer review. |
| #89101 | keep_independent | planned | independent | Independent open PR; not closable as duplicate or low-signal. |
| #89287 | keep_independent | planned | independent | Independent open PR. |
| #89367 | keep_independent | planned | independent | Independent open PR; leave queued for maintainer decision. |
| #92946 | keep_independent | planned | independent | Independent open PR blocked on proof/review, not a cleanup close candidate. |
| #92341 | keep_independent | planned | independent | Independent open PR requiring author/maintainer follow-up. |
| #93239 | keep_independent | planned | independent | Independent docs PR; keep for maintainer review. |
| #50463 | keep_independent | planned | independent | Independent open PR; not safe to close or merge in this shard. |
| #53920 | keep_independent | planned | independent | Independent useful contributor PR. |
| #54904 | keep_independent | planned | independent | Independent open PR blocked on review changes. |
| #70046 | keep_independent | planned | independent | Independent clean PR for maintainer review. |
| #86655 | route_security | planned | security_sensitive | Broad auth-provider/security-boundary extension is out of ProjectClownfish cleanup scope. |
| #87613 | route_security | planned | security_sensitive | Security-boundary tagged run-control work should not be processed by backlog cleanup automation. |
| #89172 | keep_independent | planned | independent | Independent open PR. |
| #89395 | keep_independent | planned | independent | Independent open PR; no mutation allowed. |
| #89416 | keep_independent | planned | independent | Independent open PR. |
| #89442 | keep_independent | planned | independent | Independent open PR awaiting maintainer review. |
| #77017 | keep_independent | planned | independent | Independent broad open PR; no closure or merge action in plan mode. |
| #89482 | keep_independent | planned | independent | Independent open PR requiring follow-up. |
| #89547 | keep_independent | planned | independent | Independent feature PR for maintainer review. |
| #89576 | keep_independent | planned | independent | Independent open PR. |
| #92863 | keep_independent | planned | independent | Independent docs PR. |
| #89584 | keep_independent | planned | independent | Independent open feature PR. |
| #89604 | keep_independent | planned | independent | Independent open PR. |
| #89612 | keep_independent | planned | independent | Independent open PR. |
| #89621 | keep_independent | planned | independent | Independent open PR. |
| #93245 | keep_independent | planned | independent | Independent open PR; merge is blocked by job mode/frontmatter. |
| #89714 | keep_independent | planned | independent | Independent open PR. |

## Needs Human

- none
