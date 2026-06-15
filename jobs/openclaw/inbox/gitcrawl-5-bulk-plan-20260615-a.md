---
repo: openclaw/openclaw
cluster_id: gitcrawl-5-bulk-plan-20260615-a
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
  - "#90313"
candidates:
  - "#71656"
  - "#72546"
  - "#72611"
  - "#74639"
  - "#75658"
  - "#76456"
  - "#76545"
  - "#79068"
  - "#79223"
  - "#79507"
  - "#79547"
  - "#79916"
  - "#80083"
  - "#80664"
  - "#80666"
  - "#83213"
  - "#83625"
  - "#84286"
  - "#84291"
  - "#84847"
  - "#84848"
  - "#84882"
  - "#85473"
  - "#86178"
  - "#86275"
  - "#88062"
  - "#88632"
  - "#88919"
  - "#89200"
  - "#89209"
  - "#89288"
  - "#89666"
  - "#89719"
  - "#89721"
  - "#90194"
  - "#90313"
  - "#90433"
  - "#91057"
  - "#91182"
  - "#91267"
cluster_refs:
  - "#71656"
  - "#72546"
  - "#72611"
  - "#74639"
  - "#75658"
  - "#76456"
  - "#76545"
  - "#79068"
  - "#79223"
  - "#79507"
  - "#79547"
  - "#79916"
  - "#80083"
  - "#80664"
  - "#80666"
  - "#83213"
  - "#83625"
  - "#84286"
  - "#84291"
  - "#84847"
  - "#84848"
  - "#84882"
  - "#85473"
  - "#86178"
  - "#86275"
  - "#88062"
  - "#88632"
  - "#88919"
  - "#89200"
  - "#89209"
  - "#89288"
  - "#89666"
  - "#89719"
  - "#89721"
  - "#90194"
  - "#90313"
  - "#90433"
  - "#91057"
  - "#91182"
  - "#91267"
overlap_policy: "exclude-existing"
security_policy: central_security_only
import_security_policy: "skip-full"
security_sensitive: false
security_signal_refs:
  - "#79068"
  - "#84848"
  - "#88919"
  - "#89209"
  - "#91182"
canonical_hint: "gitcrawl representative #90313 is open; worker must verify it is still the best live canonical."
notes: "Generated from gitcrawl run cluster 5 on 2026-06-15. Security-signal refs #79068, #84848, #88919, #89209, #91182 must be routed with route_security and must not block unrelated non-security work."
---

# Gitcrawl Cluster 5

Generated from local gitcrawl run cluster 5 for `openclaw/openclaw`.

Display title:

> Dreaming session-corpus: cron classification doesn't follow subagent parentage; archived (`.deleted`/`.reset`) transcripts re-ingested

Cluster shape from gitcrawl:

- total members: 40
- issues: 20
- pull requests: 20
- open candidates in local store: 40
- security-signal refs requiring route_security: #79068, #84848, #88919, #89209, #91182
- representative: #90313, currently open in local store
- latest member update: 2026-06-14T04:46:07.399851Z

## Goal

Classify the open candidate issues and PRs in read-only plan mode. Do not close anything. If the representative is closed, report whether another open item should become the live canonical. If the cluster contains multiple root causes, split them in the action matrix instead of forcing a single duplicate family.

## Member Inventory

Closed context refs:

- none

Open candidates:

- #71656 Memory dreaming: corpus pre-filtering, weighted scoring, and session scan stall
- #72546 [Bug]: Memory dreaming cron reports ok with harness data but writes no artifacts on 2026.4.24
- #72611 Dreaming needs configurable session/cron exclusions; isolated cron transcripts still enter session corpus
- #74639 [Bug]: Dreaming phase reports continue, but DREAMS.md stops advancing after April 26, 2026 on 2026.4.25; recovery/backfill can leave inconsistent Dream Diary state
- #75658 feat: sessions cleanup should remove physical .deleted and .reset files, not only index entries
- #76456 cron session reaper skips base cron sessions, only sweeps :run: sub-sessions
- #76545 fix(cron): sweep base cron sessions, not just run sessions
- #79068 [security-signal] fix: bound gateway session memory after compaction
- #79223 Feature request: configurable Dream Diary language / prompt
- #79507 Dreaming short-term promotion promotes cron delivery reports as high-value memories
- #79547 fix(memory): skip runtime cron promotion
- #79916 [Feature]: Allow machine-only memory-core dreaming without Dream Diary prose
- #80083 fix: bound dreaming narrative session growth
- #80664 Memory Dreaming: filter assistant process chatter from session-corpus candidates
- #80666 Filter assistant process chatter from Dreaming session corpus
- #83213 [codex] fix(gateway): clear live model switch on reset
- #83625 fix(gateway): clear pending live switch on model reset
- #84286 [Bug]: Dreaming cron not auto-recreated after plugin re-enable + zero promotion despite active-memory working
- #84291 [Bug]: dreaming silently fails on >16 MB short-term-recall.json (v5.18 regression)
- #84847 [Bug]: Managed memory dreaming cron can overload gateway under pressure
- #84848 [security-signal] fix(memory-core): bound managed dreaming under pressure
- #84882 [Bug]: memory-core Dreaming `normalized recall artifacts` silently deletes daily memory files (memory/YYYY-MM-DD.md)
- #85473 [Feature] Decouple dreaming from memory-core — allow any memory plugin to implement dreaming protocol
- #86178 [Bug]: Managed Memory Dreaming Promotion cron silently NO_REPLY since 2026-05-09 (jobs.json lastRun stays null)
- #86275 [Fix] #84847 [Bug]: Managed memory dreaming cron can overload gateway under pressure
- #88062 fix(logging): avoid stalled warnings for active model calls
- #88632 [Bug]: gateway model-run sessions accumulate until session maxEntries cap
- #88919 [security-signal] fix: allow preflight compaction to reenter session locks
- #89200 Deleting a session (sessions.delete / dashboard) orphans its .trajectory.jsonl and .trajectory-path.json files
- #89209 [security-signal] fix(sessions): remove trajectory files on delete
- #89288 fix: prune stale session cleanup archives
- #89666 cron.sessionRetention does not prune isolated-target cron sessions — reaper targets :run: key shape which isolated jobs never generate
- #89719 fix(cron): prune isolated-target cron sessions in session reaper
- #89721 test(cron): cover cron base-session preservation during reaper sweep
- #90194 fix(cron): sweep isolated-target base cron sessions under sessionRetention
- #90313 Dreaming session-corpus: cron classification doesn't follow subagent parentage; archived (`.deleted`/`.reset`) transcripts re-ingested
- #90433 fix(memory-core): exclude archived transcripts from Dreaming session corpus
- #91057 fix(sessions): prune stale gateway model-run sessions
- #91182 [security-signal] fix(memory-core): exclude archive transcripts from dreaming session corpus collection
- #91267 fix(memory-core): skip session archive artifacts during dreaming corpus collection (fixes #90313)
