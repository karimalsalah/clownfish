---
repo: openclaw/openclaw
cluster_id: gitcrawl-1102-bug-isolated-cron-can-deliver-unavailable-tool-self-debug-to-tel
mode: plan
allowed_actions:
  - comment
  - label
  - close
blocked_actions:
  - force_push
  - bypass_checks
  - merge
  - fix
  - raise_pr
require_human_for:
  - security_sensitive
  - failing_checks
  - conflicting_prs
  - unclear_canonical
  - broad_code_delta
canonical: []
candidates:
  - "#46548"
  - "#93251"
cluster_refs:
  - "#46548"
  - "#93251"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#38570"
  - "#60841"
  - "#60842"
  - "#74807"
  - "#76456"
  - "#76490"
  - "#76545"
  - "#81514"
  - "#83094"
  - "#84156"
  - "#84709"
  - "#84895"
  - "#85073"
  - "#85394"
  - "#87426"
  - "#88876"
  - "#88878"
  - "#88880"
  - "#89666"
  - "#89719"
  - "#89721"
  - "#90194"
  - "#91271"
  - "#91499"
  - "#91542"
  - "#91559"
  - "#91714"
  - "#92257"
  - "#92283"
  - "#92535"
  - "#92545"
  - "#92603"
  - "#93207"
  - "#93826"
  - "#93944"
  - "#94223"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #92535 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1102 on 2026-06-19. Existing-overlap refs #38570, #60841, #60842, #74807, #76456, #76490, #76545, #81514, #83094, #84156, #84709, #84895, #85073, #85394, #87426, #88876, #88878, #88880, #89666, #89719, #89721, #90194, #91271, #91499, #91542, #91559, #91714, #92257, #92283, #92535, #92545, #92603, #93207, #93826, #93944, #94223 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1102

Generated from local gitcrawl run cluster 1102 for `openclaw/openclaw`.

Display title:

> [Bug]: isolated cron can deliver unavailable-tool self-debug to Telegram

Cluster shape from gitcrawl:

- total members: 38
- issues: 12
- pull requests: 26
- open candidates in local store: 2
- excluded existing-overlap refs: #38570, #60841, #60842, #74807, #76456, #76490, #76545, #81514, #83094, #84156, #84709, #84895, #85073, #85394, #87426, #88876, #88878, #88880, #89666, #89719, #89721, #90194, #91271, #91499, #91542, #91559, #91714, #92257, #92283, #92535, #92545, #92603, #93207, #93826, #93944, #94223
- representative: #92535, currently open in local store
- latest member update: 2026-06-19T02:13:01.192779Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #46548 Tool error messages surfaced to chat should include failure reason and retry confirmation
- #93251 Telegram delivery leaks raw tool failure messages from automated agent runs

Existing-overlap context refs:

- #38570 Inter-agent sessions_send: sender attributed as wrong agent (missing identity name)
- #60841 [Bug]: toolsAllow cannot re-expose core tools in embedded cron runs
- #60842 [security-signal] fix(agents): re-expose toolsAllow core tools in embedded runs
- #74807 [Bug] Cron task summary ignores agent self-correction - picks tool error over final assistant reply
- #76456 cron session reaper skips base cron sessions, only sweeps :run: sub-sessions
- #76490 [security-signal] fix(agents): route sessions_send A2A announce replies back to request…
- #76545 fix(cron): sweep base cron sessions, not just run sessions
- #81514 bug(cron): isolated-job status is non-deterministic when an agent recovers from a tool error
- #83094 [security-signal] feat(agents): add sessions_send handoff acknowledgements
- #84156 [security-signal] fix(cron): respect recovered tool errors
- #84709 [security-signal] fix(cron): fail closed when required tools are unavailable
- #84895 Forward cron toolsAllow to CLI runs
- #85073 [security-signal] fix(cron): authorize isolated tool allowlist runs
- #85394 [security-signal] refactor(cron-tool): decompose into per-action tools (WOR-317)
- #87426 Cron delivery: synthesized "(agent) failed" summary paraphrases bash into garbled "step list"
- #88876 fix(ci): restore cron schema snapshots
- #88878 fix(agents): project cron tool schemas for providers
- #88880 fix(agents): project nullable tool schemas for providers
- #89666 cron.sessionRetention does not prune isolated-target cron sessions — reaper targets :run: key shape which isolated jobs never generate
- #89719 fix(cron): prune isolated-target cron sessions in session reaper
- #89721 test(cron): cover cron base-session preservation during reaper sweep
- #90194 fix(cron): sweep isolated-target base cron sessions under sessionRetention
- #91271 fix(agents): include requester identity in sessions_send context (Fixes #38570)
- #91499 [security-signal] fix(cron): preserve scheduled turn tool policy [AI]
- #91542 [Bug] Gemini (jjcc/openai-compat) rejects cron tool schema: anyOf properties missing type field in v2026.6.1
- #91559 fix(agents): clean Gemini tool schemas by model id
- #91714 fix(agents): apply Gemini schema cleaning for Gemini models via OpenAI-compat providers
- #92257 [Bug]: sessions_send with announce delivery injects Argus reply context into isolated cron session, causing agent feedback loop
- #92283 [security-signal] fix(agents): don't inject A2A turns into isolated-cron sessions_send (#92257)
- #92535 [security-signal] [Bug]: isolated cron can deliver unavailable-tool self-debug to Telegram
- #92545 [security-signal] fix(cron): fail closed on repeated unavailable-tool self-debug (#92535) [AI-assisted]
- #92603 [security-signal] fix(cron): summarize shell failures directly
- #93207 [security-signal] fix(cron): suppress unavailable-tool self-debug replies
- #93826 fix(agents): skip A2A announce flow for isolated cron sessions_send
- #93944 fix(cron): emit exhausted-unavailable-tool failure signal to suppress self-debug delivery (fixes #92535)
- #94223 fix(codex): prefer recovered replies over stale failure banners
