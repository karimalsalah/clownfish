---
repo: openclaw/openclaw
cluster_id: gitcrawl-39-bulk-plan-20260615-a
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
canonical:
  - "#80515"
candidates:
  - "#11487"
  - "#69297"
  - "#69926"
  - "#73695"
  - "#75009"
  - "#80515"
  - "#81053"
  - "#82039"
  - "#83217"
  - "#83600"
  - "#91174"
  - "#91180"
cluster_refs:
  - "#11487"
  - "#69297"
  - "#69926"
  - "#73695"
  - "#75009"
  - "#80515"
  - "#81053"
  - "#82039"
  - "#83217"
  - "#83600"
  - "#91174"
  - "#91180"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#67816"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#69297"
  - "#73695"
  - "#75009"
  - "#80515"
  - "#81053"
  - "#82039"
  - "#83600"
  - "#91180"
canonical_hint: "gitcrawl representative #80515 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 39 on 2026-06-15. Security-signal refs #69297, #73695, #75009, #80515, #81053, #82039, #83600, #91180 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #67816 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 39

Generated from local gitcrawl run cluster 39 for `openclaw/openclaw`.

Display title:

> refactor(whatsapp): add canonical target facts

Cluster shape from gitcrawl:

- total members: 13
- issues: 4
- pull requests: 9
- open candidates in local store: 12
- excluded existing-overlap refs: #67816
- security-signal refs requiring route_security: #69297, #73695, #75009, #80515, #81053, #82039, #83600, #91180
- representative: #80515, currently open in local store
- latest member update: 2026-06-14T04:46:07.509316Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #11487 Add optional `name`/`label` field to group config entries
- #69297 [security-signal] fix(whatsapp): Add group admin privacy controls
- #69926 [Feature]: WhatsApp: per-group allowFrom for sender authorization (parity with Feishu/IRC/LINE/Telegram/Nextcloud-talk)
- #73695 [security-signal] WhatsApp: send commentary live
- #75009 [security-signal] Add WhatsApp DM message-tool reply mode
- #80515 [security-signal] refactor(whatsapp): add canonical target facts
- #81053 [security-signal] feat(whatsapp): per-group allowFrom for sender authorization
- #82039 [security-signal] WhatsApp: separate outbound allowSendTo from inbound allowFrom
- #83217 [Feature]: Support WhatsApp interactive list context and list replies
- #83600 [security-signal] feat(whatsapp): support list reply actions
- #91174 Support WhatsApp group names in group config
- #91180 [security-signal] feat(whatsapp): support opt-in group-name config

Existing-overlap context refs:

- #67816 [security-signal] fix(whatsapp): finish timeout-aware setup and status handling
