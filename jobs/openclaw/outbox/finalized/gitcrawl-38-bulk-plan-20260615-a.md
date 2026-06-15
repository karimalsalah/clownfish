---
repo: openclaw/openclaw
cluster_id: gitcrawl-38-bulk-plan-20260615-a
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
  - "#91206"
candidates:
  - "#28965"
  - "#76128"
  - "#78441"
  - "#89469"
  - "#89522"
  - "#90763"
  - "#91171"
  - "#91206"
  - "#92424"
  - "#92486"
  - "#92573"
cluster_refs:
  - "#28965"
  - "#76128"
  - "#78441"
  - "#89469"
  - "#89522"
  - "#90763"
  - "#91171"
  - "#91206"
  - "#92424"
  - "#92486"
  - "#92573"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#58822"
  - "#58823"
  - "#72984"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#78441"
  - "#89469"
canonical_hint: "gitcrawl representative #91206 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 38 on 2026-06-15. Security-signal refs #78441, #89469 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #58822, #58823, #72984 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 38

Generated from local gitcrawl run cluster 38 for `openclaw/openclaw`.

Display title:

> fix(agents/subagent-spawn): pass resolved model to gateway agent call

Cluster shape from gitcrawl:

- total members: 14
- issues: 7
- pull requests: 7
- open candidates in local store: 11
- excluded existing-overlap refs: #58822, #58823, #72984
- security-signal refs requiring route_security: #78441, #89469
- representative: #91206, currently open in local store
- latest member update: 2026-06-14T04:46:06.49089Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #28965 [Proposal] Simplify Model Configuration: Single-Source Reconcile + Session Override Reset
- #76128 models set leaves main/default agent pinned to old model via agents.list override
- #78441 [security-signal] feat(subagents): forward toolsAllow from sessions_spawn
- #89469 [security-signal] feat(agents): inherit requester model for subagents
- #89522 [Feature]: Inherit requester session model for native subagents
- #90763 [Feature]: Add agents.list[].subagents.allowedModels to restrict model overrides in sessions_spawn
- #91171 [Bug]: Sub-agent model routing ignores model parameter, silently falls back to deepseek
- #91206 fix(agents/subagent-spawn): pass resolved model to gateway agent call
- #92424 fix(agents): resolve fresh model from registry for post-turn reads after /model switch (fixes #92415)
- #92486 Subagent model override from agents.defaults.subagents.model is silently discarded (modelOverrideSource:"auto" matches legacy-cleanup heuristic)
- #92573 fix: preserve config-selected subagent model overrides

Existing-overlap context refs:

- #58822 fix(agents): subagent model precedence — global default shadowed by parent agent's own model
- #58823 fix(agents): restore global subagent model default priority over agent own model
- #72984 fix(subagent): resolve runtime model from subagent default instead of parent primary
