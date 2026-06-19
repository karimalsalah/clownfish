---
repo: openclaw/openclaw
cluster_id: gitcrawl-1099-fix-telegram-preserve-delivery-without-rich-api
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
  - "#92258"
  - "#93263"
  - "#93493"
  - "#94117"
  - "#94129"
cluster_refs:
  - "#92258"
  - "#93263"
  - "#93493"
  - "#94117"
  - "#94129"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#49889"
  - "#55512"
  - "#55596"
  - "#59221"
  - "#74077"
  - "#77211"
  - "#79804"
  - "#80362"
  - "#80520"
  - "#80529"
  - "#80862"
  - "#80989"
  - "#82089"
  - "#83161"
  - "#84563"
  - "#85403"
  - "#85654"
  - "#87739"
  - "#90753"
  - "#90905"
  - "#91383"
  - "#92946"
  - "#93002"
  - "#93059"
  - "#93088"
  - "#93218"
  - "#93279"
  - "#93345"
  - "#93372"
  - "#93545"
  - "#94118"
  - "#94128"
  - "#94198"
  - "#94231"
  - "#94631"
security_policy: central_security_only
import_security_policy: "skip-any"
security_sensitive: false
canonical_hint: "gitcrawl representative #92946 is already owned by an existing job; worker must choose the best live canonical from the remaining open refs."
notes: "Generated from gitcrawl run cluster 1099 on 2026-06-19. Existing-overlap refs #49889, #55512, #55596, #59221, #74077, #77211, #79804, #80362, #80520, #80529, #80862, #80989, #82089, #83161, #84563, #85403, #85654, #87739, #90753, #90905, #91383, #92946, #93002, #93059, #93088, #93218, #93279, #93345, #93372, #93545, #94118, #94128, #94198, #94231, #94631 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 1099

Generated from local gitcrawl run cluster 1099 for `openclaw/openclaw`.

Display title:

> fix(telegram): preserve delivery without rich API

Cluster shape from gitcrawl:

- total members: 40
- issues: 17
- pull requests: 23
- open candidates in local store: 5
- excluded existing-overlap refs: #49889, #55512, #55596, #59221, #74077, #77211, #79804, #80362, #80520, #80529, #80862, #80989, #82089, #83161, #84563, #85403, #85654, #87739, #90753, #90905, #91383, #92946, #93002, #93059, #93088, #93218, #93279, #93345, #93372, #93545, #94118, #94128, #94198, #94231, #94631
- representative: #92946, currently open in local store
- latest member update: 2026-06-19T02:13:01.149566Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #92258 feat: Telegram Bot API 10.1 — Rich Messages support (sendRichMessage, sendRichMessageDraft, RichBlockThinking)
- #93263 [Bug]: Telegram clients show "not supported" for every reply on 2026.6.8-beta.1
- #93493 [Feature]: Telegram sendRichMessage support — tables, inline media, math formulas, 32k char limit
- #94117 Telegram rich final reply fails with RICH_MESSAGE_URL_INVALID for local Markdown link hrefs
- #94129 Telegram markdown rendering: '$' followed by digit/uppercase triggers variable interpolation, inline '**bold**' causes font inconsistency, line-start '#' triggers H1 heading

Existing-overlap context refs:

- #49889 [Bug]: Telegram partial-stream finalization lacks clear delivery-mode observability (sent vs preview-finalized vs canceled)
- #55512 Markdown table columns misaligned with CJK characters on Telegram and Discord
- #55596 fix(CLI) Markdown table columns misaligned with CJK characters on Telegram and Discord
- #59221 [security-signal] feat: add built-in command aliases (/c, /ctx, /s, /n, /m, /ms, /h, /f, /u)
- #74077 Feature: slash command to set preview streaming mode for current chat/session
- #77211 [security-signal] fix(telegram): preserve default tool progress when preview streaming is off
- #79804 [Bug]: Internal tool/status messages leak into Telegram chat even when streaming/tool progress is disabled
- #80362 Telegram retry regex too strict: bare grammy `Network request for 'X' failed!` (no "after") never classified as recoverable for `context: send`, drops outbound messages
- #80520 Telegram messages silently dropped, no sendMessage logged
- #80529 fix(telegram): make pre-connect network failures recoverable in send context
- #80862 Telegram uses multiple sendMessage previews instead of editMessageText, leaving stale reasoning messages
- #80989 [Feature]: /progress command to toggle tool-call progress in streaming preview
- #82089 Feature: Telegram temporary tool-progress previews with final native quote replies
- #83161 fix(telegram): move preview-streamed dedup to channel layer (#80520)
- #84563 [security-signal] fix(telegram): avoid silent truncation in partial streaming finals
- #85403 fix(telegram): suppress message-tool reply previews
- #85654 Group reply pipeline silently drops agent-generated payload between turn completion and Telegram sendMessage
- #87739 Telegram: keep long DM turns alive through progress previews
- #90753 [Bug]: Telegram progress bubble remains above subsequent assistant messages in progress streaming mode
- #90905 Suppress recovered read-only tool warnings after block replies
- #91383 Telegram normal reply can start mid-URL / lose opening text when message begins with Markdown links (2026.5.27)
- #92946 fix(telegram): preserve delivery without rich API
- #93002 [security-signal] Fix Telegram progress draft cleanup before tool output
- #93059 [codex] Fix Telegram rich parse fallback text loss
- #93088 [security-signal] fix(telegram): bind bot mentions to assistant identity
- #93218 [security-signal] feat: add session stream mode command
- #93279 [security-signal] fix(telegram): restore readable default text sends
- #93345 fix(telegram): avoid rich messages in group chats
- #93372 fix(telegram): default replies to legacy sendMessage
- #93545 feat(telegram): add sendRichMessage fallback to legacy sendMessage
- #94118 [codex] Fix Telegram rich local Markdown link hrefs
- #94128 [security-signal] fix(telegram): drop unsupported local markdown link hrefs in rich HTML (fixes #94117)
- #94198 test(telegram): add markdown edge case regression coverage
- #94231 [security-signal] fix(telegram): strip local/relative markdown link hrefs that cause RICH_MESSAGE_URL_INVALID
- #94631 [security-signal] fix(telegram): clear split reasoning previews
