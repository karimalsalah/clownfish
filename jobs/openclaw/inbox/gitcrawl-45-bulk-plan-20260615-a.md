---
repo: openclaw/openclaw
cluster_id: gitcrawl-45-bulk-plan-20260615-a
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
  - "#90202"
candidates:
  - "#71330"
  - "#73574"
  - "#78556"
  - "#80915"
  - "#88776"
  - "#89409"
  - "#90202"
cluster_refs:
  - "#71330"
  - "#73574"
  - "#78556"
  - "#80915"
  - "#88776"
  - "#89409"
  - "#90202"
overlap_policy: "exclude-existing"
existing_overlap_refs:
  - "#55401"
  - "#63829"
  - "#67584"
  - "#69700"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#88776"
canonical_hint: "gitcrawl representative #90202 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 45 on 2026-06-15. Security-signal refs #88776 must be routed with route_security and must not block unrelated non-security work. Existing-overlap refs #55401, #63829, #67584, #69700 were excluded from actionable refs and kept as context only."
---

# Gitcrawl Cluster 45

Generated from local gitcrawl run cluster 45 for `openclaw/openclaw`.

Display title:

> feat(memory-wiki): add managed local source imports

Cluster shape from gitcrawl:

- total members: 11
- issues: 5
- pull requests: 6
- open candidates in local store: 7
- excluded existing-overlap refs: #55401, #63829, #67584, #69700
- security-signal refs requiring route_security: #88776
- representative: #90202, currently open in local store
- latest member update: 2026-06-14T04:46:07.17825Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71330 Feature: Configurable memory promotion target file
- #73574 Wiki lint should resolve title, slug, fragment, and source-path Obsidian link variants
- #78556 fix(memory-wiki): resolve bridge-relative lint links
- #80915 fix(memory-wiki): accept title wikilink targets
- #88776 [security-signal] fix: normalise wiki lint targets
- #89409 [codex] docs(memory-wiki): clarify sources wrapper contract
- #90202 feat(memory-wiki): add managed local source imports

Existing-overlap context refs:

- #55401 Feature: Per-agent plugin configuration overrides for multi-agent setups
- #63829 [Feature]: Per-agent memory-wiki vault configuration
- #67584 feat(memory-wiki): per-org vaults via ctx-aware vault.path templating
- #69700 memory-wiki lint: sources/ directory requires frontmatter on raw imported files
