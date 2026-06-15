---
repo: openclaw/openclaw
cluster_id: pr-inventory-maintainer_owned-20260615T095031-002
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
  - maintainer_signal
  - active_author_followup
  - technical_correctness_judgment
canonical: []
candidates:
  - "#73385"
  - "#73390"
  - "#73399"
  - "#73401"
  - "#73402"
  - "#73403"
  - "#73606"
  - "#73724"
  - "#74041"
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76027"
  - "#76115"
  - "#76221"
  - "#76235"
  - "#76245"
  - "#76730"
  - "#76895"
  - "#76927"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#77542"
cluster_refs:
  - "#73385"
  - "#73390"
  - "#73399"
  - "#73401"
  - "#73402"
  - "#73403"
  - "#73606"
  - "#73724"
  - "#74041"
  - "#74176"
  - "#74402"
  - "#75614"
  - "#76027"
  - "#76115"
  - "#76221"
  - "#76235"
  - "#76245"
  - "#76730"
  - "#76895"
  - "#76927"
  - "#77020"
  - "#77045"
  - "#77134"
  - "#77213"
  - "#77542"
security_policy: central_security_only
security_sensitive: false
canonical_hint: "This is a PR inventory classification shard, not a dedupe cluster. Classify each PR independently and do not invent a shared canonical."
notes: "Generated from local gitcrawl open PR inventory on 2026-06-15T09:50:31.569Z; bucket=maintainer_owned; no GitHub mutation is possible in plan mode."
---

# PR Inventory maintainer_owned 2

This is a high-volume classification shard over open pull requests. It is not a dedupe cluster.

## Goal

Hydrate live GitHub state for each listed PR and emit one conservative action per PR. Prefer `keep_related`, `keep_independent`, `needs_human`, or `route_security`. Emit close-style planned actions only when fresh live evidence makes the PR boringly superseded, duplicate, abandoned, or low-signal under existing policies. For `target_updated_at`, copy only the hydrated value from the Cluster preflight artifact; do not use gitcrawl snapshot timestamps from this job body.

## Inventory

### #73385 fix: gate sandbox write tools on writable workspace access

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes #65316. This narrows sandboxed coding-tool availability so write, edit, and apply_patch are exposed only when the sandbox has an effective writable workspace target. The prior path/media issues tracked in #57230 and #59063 are already closed as implement

### #73390 Add configurable WebChat send shortcut

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: app: web-ui, maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Fixes https://github.com/openclaw/openclaw/issues/8147. This adds a narrow WebChat/Control UI send-shortcut preference so users can avoid accidental sends while composing with IME or multi-line text. The implementation should update the composer keydown behavi

### #73399 fix(feishu): carry forward DM fallback and topic labels

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, channel: feishu, size: L, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:38Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Carry forward the remaining Feishu display-name behavior from #38958 after #51032 already landed the group-name session label fix. This replacement should stay narrow: - keep #51032's group-name implementation as the baseline - add/repair DM display

### #73401 fix(agents): load symlinked workspace bootstrap files

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:41Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Load explicit fixed workspace bootstrap files such as AGENTS.md, SOUL.md, USER.md, and MEMORY.md when they are symlinks to readable regular files outside the workspace. - Keep the fallback scoped to fixed bootstrap files and preserve existing prot

### #73402 fix(tui): subscribe to live session transcript updates

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: M, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #38829 by making the bundled TUI subscribe to live transcript updates for the active session. - Covers the duplicate reproduction in #43341 without widening the gateway hidden-run chat fanout boundary discussed on #41964. - Keeps #51691 as b

### #73403 fix(agent): route explicit channel targets per recipient

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, commands, agents, maintainer, size: S, clawsweeper
- gitcrawl snapshot updated: 2026-05-14T05:23:44Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #41483 by deriving per-recipient agent session keys for `openclaw agent --agent ... --channel ... --to ...` instead of falling back to `agent:<id>:main`. - Preserves the existing #60614 behavior where `--session-id` takes precedence over the

### #73606 docs(rfd): @openclaw/call-sdk — provider-agnostic real-time call SDK

- bucket: maintainer_owned
- author: visionik
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:23:46Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## What Adds an RFC + two companion design docs proposing **`@openclaw/call-sdk`** — a provider-agnostic real-time call SDK — and its binding into OpenClaw's `ChannelPlugin` model. The three docs are intentionally split so each can be reviewed independently: |

### #73724 fix(cli): avoid false local gateway unreachable on probe timeout

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: vincentkoc
- labels: gateway, cli, commands, maintainer, size: XL, clawsweeper, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:23:48Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - separate local gateway reachability from follow-up detail/read probe failures - add a bounded direct status-RPC fallback or degraded classification for local status/probe paths when the default probe times out or returns unknown capability but the

### #74041 [codex] Route generated media through assistant delivery

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:53Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the async media completion direct-send path and its `tools.media.asyncCompletion.directSend` config surface - keep async music/video completion as a requester-session wake so the assistant receives the generated paths and owns the follow-up

### #74176 feat(telegram): support mini app URL buttons

- bucket: maintainer_owned
- author: obviyus
- author association: MEMBER
- draft: no
- assignees: obviyus
- labels: docs, channel: telegram, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:23:57Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Reuse shared presentation URL buttons in Telegram inline keyboards. - Render direct-chat HTTPS presentation buttons as Telegram Mini App web_app buttons. - Document the Telegram HTTPS, private-chat, and initData constraints. ## Validation - pnpm t

### #74402 fix(agents): route async media completions through wake media

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:24:00Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - stop async media completion wakes from instructing the parent to call the message tool - rely on structured media carried by the wake, with MEDIA lines only as fallback - assert fallback instructions no longer mention message-tool delivery or NO_R

### #75614 docs: consolidate remote testing around Crabbox

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:24:10Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #76027 [codex] feat(webchat): add gateway read aloud

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, app: web-ui, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:15Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - add a Control UI/WebChat assistant Read aloud action backed by the existing `tts.convert` Gateway RPC - play returned audio through the authenticated assistant-media route, so configured `messages.tts` providers are used instead of browser speech 

### #76115 fix(diagnostics): experiment with stuck session aborts

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: L
- gitcrawl snapshot updated: 2026-05-14T05:24:16Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Adds experimental `diagnostics.stuckSessionAbortMs` for a second-stage stalled/stuck recovery threshold. - Keeps warn-threshold recovery observe-only for active work, but lets the longer experimental threshold abort active embedded reply work or r

### #76221 [codex] Fix Anthropic Vertex npm audit regression

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: cli, maintainer, size: M, clawsweeper:automerge, clawsweeper:human-review
- gitcrawl snapshot updated: 2026-05-14T05:24:18Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - remove the `@anthropic-ai/vertex-sdk` runtime dependency from the shipped OpenClaw package - replace it with a small local Anthropic Vertex client built on the existing `@anthropic-ai/sdk` and `google-auth-library@10.6.2` - update the lockfile so 

### #76235 [codex] Fix doctor completion cache plugin loading

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: commands, maintainer, size: XS
- gitcrawl snapshot updated: 2026-05-14T05:24:20Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the Windows `openclaw doctor` shell-completion cache path observed in the maintainer workshop: doctor was spawning `openclaw completion --write-state` without the plugin-command skip guard, so completion cache generation could load plugin CLI 

### #76245 [codex] Fallback when Windows gateway task exits early

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:21Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Adds a Windows scheduled-task fallback for the failure shape from Brad's workshop log: `schtasks /Run` is accepted, but the task quickly reports `Last Run Result=0` / stopped and no gateway listener appears. Previously the fallback only handled the 

### #76730 fix: isolate WhatsApp direct sessions by account

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: whatsapp-web, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:29Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary Fixes the WhatsApp direct-message context leak reported in #76263. With the default shared DM scope, inbound WhatsApp DMs could collapse into the agent main session, so distinct contacts shared one session file and model context. ## Root Cause Whats

### #76895 perf(core): trim channel RTT hot paths

- bucket: maintainer_owned
- author: vincentkoc
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: discord, channel: mattermost, channel: slack, channel: telegram, channel: voice-call, scripts, agents, maintainer, extensions: device-pair, size: XL, extensions: qa-lab
- gitcrawl snapshot updated: 2026-05-14T05:24:30Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: Summary - Trims Telegram, Slack, Discord, Mattermost, agent-turn, plugin control-plane, channel snapshot, catalog, media, and model-catalog hot paths. - Adds Convex credential-source support to the Telegram RTT package harness. - Records the optimization inven

### #76927 [codex] Queue subagent completion announces

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, agents, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:32Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Route subagent completion announces through the requester session steer/announce queue before direct fallback. - Force completion handoffs onto an internal queue independent of channel queue mode, while preserving bound route delivery. - Keep dire

### #77020 [codex] fix delivery suppression diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: agents, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:34Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - mark message-tool-only/send-policy-suppressed turns with generated visible output as `source-reply-delivery-suppressed` in diagnostics - use the shared reply-content predicate so rich presentation/channel payloads are counted consistently with fin

### #77045 fix(slack): tag gateway failure echoes

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: channel: slack, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:35Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: none

### #77134 feat(plugin-state): add atomic dedupe claims

- bucket: maintainer_owned
- author: amknight
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: bluebubbles, maintainer, size: M, plugin: file-transfer
- gitcrawl snapshot updated: 2026-05-14T05:24:37Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Problem: claim/check dedupe consumers need an atomic durable claim primitive before they can safely use the SQLite-backed plugin runtime state store. - Why it matters: lookup + register can race for inbound message dedupe; BlueBubbles also needs t

### #77213 fix(secrets): degrade stale auth profile refs on startup

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, gateway, maintainer, size: S
- gitcrawl snapshot updated: 2026-05-14T05:24:40Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary - Fixes #75814. - Keeps gateway startup online when a stale SecretRef exists only in a stored auth profile. - Degrades the affected runtime auth profile by removing the failed keyRef/tokenRef from the prepared snapshot, making it ineligible as missi

### #77542 [codex] add gateway stall diagnostics

- bucket: maintainer_owned
- author: steipete
- author association: MEMBER
- draft: no
- assignees: none
- labels: docs, channel: slack, gateway, cli, scripts, maintainer, size: M
- gitcrawl snapshot updated: 2026-05-14T05:24:43Z (ignore for target_updated_at; use hydrated preflight)
- body excerpt: ## Summary This adds higher-signal gateway stall diagnostics for slow Telegram turns where the transport is healthy but the Gateway/embedded Codex run stops making useful progress. Changes: - Add a lightweight diagnostic phase ring and emit `diagnostic.phase.c

