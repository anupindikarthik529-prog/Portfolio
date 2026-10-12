# HANDOVER — Karthik Anupindi Portfolio Redesign

Last updated: 2026-10-02
Prior session: https://claude.ai/code/session_01JfDsrrcrD6ejfMG7kQkm1T

## 1. Project goal

The user (Karthik Anupindi, UX/UI Designer, karthikanupindi@gmail.com) is redesigning his personal portfolio website. The live site is a Framer site, mirrored into a Figma file for editing: **Figma file key `1PD7zKot98QgHWacUtWDLm`** ("Portfolio-2026").

Target audience has shifted: he is now pursuing **contract C2C (corp-to-corp) opportunities in the USA**, not full-time roles. The current site's copy and positioning were written for a general/full-time-job audience and need to be reworked for that audience.

The engagement so far has been **content/strategy and copywriting**, not implementation. No code in this repo has been touched. The eventual goal (not yet started) is to apply the agreed copy to the Figma file / live Framer site, and possibly restyle visually using ideas from a reference template (see §5).

**This repo (`/home/user/Portfolio`) is empty** — no commits, no source files, just an initialized `.git`. It is unclear what this repo is meant to hold (site source code? Just docs/notes?) — nothing has been established yet about how the Figma/Framer site maps to this repo. Confirm this with the user before assuming a tech stack or scaffolding anything.

## 2. What has been completed

All work below was delivered as chat analysis/copy — **nothing has been written to any file in this repo**.

1. **Visual/UX critique of the current home page** (Figma node `45:387`, file `1PD7zKot98QgHWacUtWDLm`). Identified: orphaned 5th project card in a 2-column grid, inconsistent tag-pill coloring, possible contrast issues, redundant Resume CTA (nav + hero), no visible card-click affordance, uneven section spacing.
2. **Analysis of a reference template** ("Sevora" by Stylokit, Figma node `46:1462`, same file) that the user imported from the internet, considering whether to adopt its design language. Verdict: it's a freelance-agency sales template (has Pricing/Testimonials/Process-as-client-engagement sections that don't fit a job-seeking/contract portfolio) — recommended borrowing its typography/spacing/card craft, not its structure.
3. **Resume extraction** from `/root/.claude/uploads/635bf448-beb1-53ff-ab26-8284a7dbe289/c41891a5-Karthik_Anupindi_UX_Resume.docx` (⚠️ this path is session-scoped upload storage and **may not exist in a new session** — see §9 for the extracted content so it isn't lost).
4. **Full copy inventory of 5 Figma pages**, done via a background subagent reading Figma screenshots/text layers section-by-section:
   - `45:2388` — Case study: "Sales Dashboard" (internal/layer name says "Adidas"; a solo **design challenge**, not real client work — see decision log §4)
   - `45:2884` — Case study: "AI Agent-Powered SaaS Workflow" (also a solo **design challenge**)
   - `45:3799` — Case study: "INDYCAR UX Redesign" (real client engagement, NDA-limited, named stakeholder quote from David Craske, Head of Digital Experiences & Strategies at INDYCAR)
   - `45:5718` — Case study: "VYBE" (teen gratitude/wellbeing app — **academic/school project**, explicitly and honestly states no real-world launch metrics)
   - `45:2073` — About page (personal bio, "Events That Shaped My Design Path," logo/brand color story, photo gallery)
   - The **IUPUI case study page was never given a Figma link** by the user and was never read — it has since been dropped from the home page plan anyway (§4), so this gap no longer blocks anything.
5. **Tone/voice recommendation** for C2C contract targeting, grounded in the resume: position as a UX/UI designer for **complex, regulated enterprise systems** (healthcare, logistics, fintech/compliance) with real dev-handoff fluency — not a generic "UX Designer" positioning.
6. **Full home page copy rewrite** (nav, hero headline/subhead/CTAs/availability badge, brand strip, Selected Work section incl. project titles/tags, a new "Common Thread" verdict section, "How I Design" pillar copy, footer) — see §8 for the current agreed draft.
7. Confirmed via `AskUserQuestion`: (a) initially chose to deprioritize the two design-challenge case studies from the home grid, then the user **overrode this** in the very next message — see §4; (b) the availability badge should **not** state visa/work-authorization status, contract type only.

## 3. Current state of the project

- **No files exist in this repo.** This HANDOVER.md is the first file.
- All design/copy decisions live only in this conversation's history and in this document.
- The **home page copy** has a full agreed-upon draft (§8), but it has **not been applied to Figma or Framer** — it's only been presented in chat.
- The **case study pages' copy has not been rewritten yet** — only inventoried/read. Known issues in them (typos, inconsistent stats framing) are documented but unfixed (§7).
- **2 new case studies (ProTrans: a dashboard project and a design system project) do not exist yet in any form** — no Figma frames, no copy, nothing. The user wants these built and given top priority in the project order once they exist.
- No decision has been made yet on light vs. dark theme, or on whether/how much of the Sevora template's visual language to adopt. The mockup step (visual application of the new copy) has not started.

## 4. Project curation decision (important — superseded once already)

The home page "Selected Work" grid was originally 5 projects (Sales Dashboard, AI Agent, INDYCAR, VYBE, IUPUI). Decision history, most recent wins:

1. First pass: recommended dropping the Sales Dashboard and AI Agent cards because they're unlabeled solo design-challenge projects sitting next to real client work (credibility risk). User initially agreed to this via `AskUserQuestion`.
2. **User then reversed this** in the next message: keep Sales Dashboard, AI Agent, INDYCAR, and VYBE; **drop IUPUI instead**. Reasoning given by the user: VYBE is honestly a school project, but Sales Dashboard and AI Agent came from **real competitions/interview design challenges with strong problem statements** — not casual personal practice — so they're worth keeping, just framed transparently.
3. **Final agreed state**: 4 project cards, each carrying a small context-type label so the engagement type is transparent at a glance:
   - `Client Engagement — NTT INDYCAR`
   - `Design Challenge` (×2, for AI Agent and Sales Dashboard)
   - `Academic Project` (VYBE)
4. **Future state**: once the 2 ProTrans case studies (dashboard + design system) are built, they get **top priority placement** — first in the grid — each labeled `Client Engagement — ProTrans International`. Final intended order: ProTrans Dashboard → ProTrans Design System → INDYCAR → AI Agent → Sales Dashboard → VYBE.
5. Side benefit noted: 4 cards (not 5) fixes the orphaned-card grid layout issue from the original critique (§2.1); going to 6 later keeps it clean (3×2).

## 5. Reference template decision

The "Sevora" template (`46:1462`) is a light-theme freelance-agency Framer template with: Nav, Hero, Benefits, Projects (populated with demo Framer template screenshots, not real work), Why Choose Me (stat cards), Services, Process (client-engagement steps), Features (bento grid), Testimonials, **Pricing** ($1,200/$2,800 packages), FAQs, Footer.

**Recommendation given (not yet acted on):** don't port the structure — the Pricing/Testimonials/Process sections are built for selling freelance packages, not landing a contract role. Borrow only: serif+sans typography pairing, whitespace rhythm, soft rounded card styling, the "Why Choose Me" stat-card pattern (if real comparable numbers exist). Light vs. dark theme for the actual site is still an **open decision** — flagged to the user, not resolved.

## 6. Important decisions and assumptions

- **Audience = C2C contract hiring managers in the US**, not full-time recruiters. This reframes tone (numbers-first, zero fluff, domain-fluency signaling) and content priority (real paid enterprise/regulated work > solo passion projects) throughout.
- **Availability badge copy must not state visa/work-authorization status** — user's explicit instruction. Current draft just says "Open to Contract (C2C)."
- **Niche positioning assumption**: resume shows a throughline across healthcare (The Heart Center), logistics (ProTrans), fintech/compliance (TCS — SEBI/KYC/SGB trading), and higher-ed (Comet Lab/IU) — this was used to justify a "designer for complex, regulated enterprise systems" positioning in the hero. This is an inference from the resume, not something the user explicitly confirmed as their desired narrative — worth a sanity check with the user before finalizing.
- **INDYCAR numbers used are from the case study text itself** (30% session-duration increase, 25% bounce-rate drop, 4.8/5 SUS, 4.9/5 stakeholder rating, 85% feature preference), not from the resume line about NTT INDYCAR ("session duration from 30 to 50 minutes, satisfaction +25 points"). These two sets of numbers **may describe two different NTT INDYCAR projects** (the case study is a consumer-facing fan app; the resume line sounds like an internal touch-based training/learning app) — this was never fully resolved, just avoided by sourcing only from the case study since that's what the home page card is actually about. Flag if a 6th project ("INDYCAR learning app") is ever considered — the resume has real numbers for it that aren't used anywhere yet.
- Case studies for Sales Dashboard and AI Agent contain **invented-sounding precision stats** (30%, 25%, 40%, etc.) for what are time-boxed speculative exercises — flagged as a credibility risk in the review but **not yet fixed in the case study copy itself** (only the home page card titles were rewritten to lead with the design decision instead of a stat, to sidestep this — see §8).

## 7. Known errors/inconsistencies found in existing Figma copy (unresolved, not yet fixed)

From the subagent's page-by-page audit — these exist in the **current Figma file** and have not been corrected anywhere yet:

- Sales Dashboard case study: "Real time alerts on on pipeline risks and milestones." (duplicated "on on")
- VYBE case study: "Opened 1 times" (should be "time"); an unfinished/fragment sentence in the Focus Mode feature list: "...focus mode to block all the social media apps from using."
- AI Agent case study: timeline stated inconsistently — "One Day" in the header meta row vs. "24-Hour Design Sprint" in the closing Reflection section.
- Emoji-as-bullet formatting (✅❌🔹💡🎯📌) is used heavily and inconsistently across case studies (heavy in INDYCAR/VYBE, absent in About page, light in Sales Dashboard/AI Agent) — worth standardizing if/when case study copy is rewritten.
- Recurring boilerplate lines duplicated verbatim across multiple case studies (e.g. "Strategic Goals: Clarity over Complexity," "The goal is to transform this output into an enterprise-wide solution that continuously evolves with user needs," the pull-quote "Courageous simplification outperforms exhaustive complexity") — likely leftover from duplicating one case-study template; worth deciding whether to keep as a consistent refrain or differentiate.

## 8. Current agreed home page copy draft

This is the latest state, reflecting the §4 curation reversal. Not yet applied to Figma/Framer.

**Nav:** Work · About · Resume — CTA pill: "Let's Talk" (was "Contact")

**Hero**
- Kicker: "Open to Contract (C2C)"
- H1: "UX/UI Designer for Enterprise Systems Too Complex to Get Wrong"
- Subhead: "7+ years designing inside regulated, high-stakes platforms — healthcare, logistics, and financial compliance — where the job is making dense workflows simple without breaking what they're compliant with. I hand off developer-ready specs, not just mockups."
- CTAs: "Download Resume" (primary), "Book a Call" (secondary, was "Schedule Call")
- ID card: Name — Karthik Anupindi; role tags — "Enterprise UX Design" / "Healthcare & Logistics Systems" / "Design-to-Dev Handoff"; badge — "Open to Contract (C2C)"

**Brand strip:** "Teams I've Shipped With" (was "Worked With These Amazing Brands")

**Selected Work** (renamed from "Selected Projects"), 4 cards in this order:

1. `Client Engagement — NTT INDYCAR` — **"Cutting INDYCAR's App Bounce Rate 25% to Win Back Gen Z Fans"** — tags: User Research, Information Architecture, UI Design, User Testing
2. `Design Challenge` — **"Designing Trust Into an AI Agent Workflow for Enterprise Teams"** — tags: User Research, Ideation, Product Strategy, UI Design
3. `Design Challenge` — **"Choosing Clarity Over Completeness: An 8-Hour Sales Dashboard Challenge"** — tags: User Research, Product Strategy, UI Design, UX Testing
4. `Academic Project` — **"VYBE: Trading 'Journaling' for a 1-Minute Daily Habit"** — tags: User Research, UX Strategy, Prototyping, Usability Testing

**"Common Thread" section** (new — sits between Selected Work and How I Design):
> Enterprise sales dashboard. An AI agent workflow for enterprise teams. A motorsport fan app for 10 months with a named stakeholder on the other side. A teen mental health app built in grad school. Client work, competitions, interviews — different origins, same pattern underneath: ambiguous problems, real constraints, and a deadline that wasn't moving. Every one of these got a yes for the same reason — I turn a messy, high-stakes situation into a shippable decision, fast.

**How I Design** (4 pillars, rewritten to cite resume evidence instead of generic adjectives):
- Impact-Driven: "8 hours from blank page to a working prototype. I don't need six weeks to find the right decision."
- User-Centered: "25+ participants interviewed on a single study, not assumptions dressed up as research."
- Data-Informed: "SQL funnel analysis and A/B testing, not vibes — I've cut bounce rate by double digits more than once."
- Ethical: "WCAG audits and compliance-first design for healthcare and fintech, where getting it wrong has real consequences."

**Footer:**
> Open to Your Next Contract
> [Let's Talk]
> Powered by Curiosity, Late Nights, and Endless Iterations
> © Karthik Anupindi 2025

## 9. Resume content (extracted, in case the upload path is gone in the next session)

Source: `Karthik_Anupindi_UX_Resume.docx`. Contact: (317) 640-3934, karthikanupindi98@gmail.com, linkedin.com/in/karthikanupindi, karthikanupindi.framer.ai

**Summary:** UX/UI Designer, 7+ years, user-centered digital products across web/enterprise, healthcare and higher-ed domains. Full design-process ownership (requirements → wireframes → hi-fi → dev handoff). Accessibility (WCAG), data-driven design, design system governance. Figma/Sketch/Adobe XD, AI-assisted workflows, communicates to executive stakeholders.

**Work experience (reverse chronological):**
- **ProTrans International** — UX/UI Designer, Indianapolis, IN, Jun 2025–Present. Developer-ready design system handoff across 4 enterprise platforms (tokens, components, documented states). Redesigned multi-step border-crossing workflows for dispatchers/drivers/customs — cut wait time 15%. Root-cause analysis on production issues for Pickup Management/EDI teams. Partnered with IT PM/engineering across parallel workstreams.
- **KGS Technology Group** — User Experience Designer, Remote, Feb–Jun 2025. Stakeholder/user interviews, current/future-state journey maps, re-architected IA — cut task completion time 10%. Annotated specs/redlines for dev handoff. Google Analytics-driven flow refinement — cut user errors 20%.
- **The Heart Center** — UX/UI Designer, Remote, Mar 2024–Feb 2025. End-to-end healthcare/digital wellness experience, 1,000+ users, 150+ hi-fi prototypes/specs. WCAG accessibility audits, usability testing, A/B tests — satisfaction +20 points, daily completions 1.25x.
- **NTT INDYCAR** — User Experience Designer, Indianapolis, IN, Jan–Dec 2023. Redesigned a touch-based mobile *learning* application (motion design, iterative prototyping) — session duration 30→50 min, satisfaction +25 points. UX writing/content strategy with digital marketing team. (⚠️ see §6 — may be a distinct project from the "INDYCAR UX Redesign" case study used on the home page.)
- **The Comet Lab (Indiana University)** — UX Designer / Graduate TA, Indianapolis, IN, Jan–Dec 2022. End-to-end UX for mobile/responsive web incl. a conversational chatbot. Usability tests with 25+ participants, A/B testing. Design system governance. Facilitated UX/Figma workshops — 15% improvement in learner outcomes.
- **Tata Consultancy Services Ltd.** — Systems Engineer / UX Designer, Mumbai, India, Jun 2019–Dec 2021. Front-end+backend ownership (HTML/CSS/JS, Java/SQL/Hibernate) for broker admin workflows and Sovereign Gold Bonds (SGB) trading flow. Rebuilt KYC/account-update flows under SEBI compliance — satisfaction +36% across 50,000+ users. Funnel analysis (GA + SQL) — bounce rate −12.5%.

**Education:** MS Human-Computer Interaction, Indiana University (Luddy School), Indianapolis. B.Tech Electronics & Instrumentation Engineering, SASTRA Deemed University, Thanjavur, India. University Innovation Fellows (Stanford University) — Design Thinking and Innovation Fellowship, Aug 2022–Mar 2023 (likely the real source of the now-dropped "IUPUI student communities" project).

**Skills:** UX Design & Strategy (product design, UX/product strategy, RCA, exec stakeholder comms, data-driven design, UX writing); Design Systems & Accessibility (governance, component libraries, tokens, WCAG 2.1/2.2, audits); Product & Interaction Design (IA, wireframing, hi-fi UI, prototypes, dev handoff, design critique, coaching); Research & Analytics (user research, usability testing, journey mapping, Google Analytics, KPIs); Development & Tools (Figma, Sketch, Adobe XD, FigJam, Miro, HTML, CSS, JavaScript, Java, SQL, Hibernate, Git, CI/CD, front-end + back-end dev, ChatGPT, Claude).

## 10. Commands/tools run this session

- `mcp__Figma__get_metadata` / `get_screenshot` (with `enableBase64Response: true`) against file `1PD7zKot98QgHWacUtWDLm` for nodes `45:387`, `46:1462` (+ children `46:1470`, `46:1699`, `46:1944`, `46:2053`, `46:2184`, `46:2859`, `46:2315`, `46:2440`, `46:2559`, `46:2751`, `46:3078`, `46:2992`), and (via background subagent) `45:2388`, `45:2884`, `45:3799`, `45:5718`, `45:2073`.
- `mkdir -p` + `curl -sL` to download a Figma screenshot asset to the scratchpad — **failed**, see §11.
- `jq`/`grep` against a saved large `get_metadata` tool-result file (too large to read directly) to extract top-level frame names.
- `unzip` + Python `re` regex extraction of `word/document.xml` from the resume `.docx` (see §11 — `pandoc` wasn't available, this was the fallback).
- `WebFetch` on an Instagram post URL — **failed**, see §11.
- No build, lint, or test commands were run — there is no code in this repo to run them against.

## 11. Errors / failed attempts

- `curl` directly to a `www.figma.com` asset URL **failed** (exit 56, `connect_rejected` — egress proxy blocks `figma.com`). Workaround used thereafter: always call Figma screenshot tools with `enableBase64Response: true` and view the image inline instead of downloading it.
- `pandoc` is **not installed** in this environment (`command not found`). Workaround: `unzip` the `.docx` and regex-extract `<w:t>` run text from `word/document.xml` directly.
- `WebFetch` on `https://www.instagram.com/p/Dd3tcuaDXxa/` **failed**: `EGRESS_BLOCKED` — the network policy blocks `www.instagram.com` outright. The Instagram carousel referenced by the user for portfolio-copy inspiration was **never actually read** — all work referencing it relies entirely on the 6 bullet points the user typed out themselves, not on the images.
- No other errors. All Figma reads eventually succeeded via the base64 workaround.

## 12. Clear next steps

1. **Confirm with the user what this repo is actually for** — it's currently empty, and it's unclear whether it should contain site source code, exported Figma content, or just planning docs. Don't assume a stack.
2. **Sanity-check the "designer for regulated enterprise systems" positioning** (§6) with the user before treating it as locked — it's a reasonable inference from the resume but was not explicitly confirmed as the narrative he wants.
3. **Resolve the INDYCAR numbers question** (§6) if a 6th "learning app" project is ever added — don't conflate the two NTT INDYCAR data points.
4. **Build the 2 new ProTrans case studies** (dashboard + design system) — currently nothing exists for these beyond "will be given top priority." Needs scope/content from the user first.
5. **Rewrite the 4 existing case studies' copy** (INDYCAR, AI Agent, Sales Dashboard, VYBE) applying the same 6 principles used for the home page, and fix the typos/inconsistencies in §7 along the way.
6. **Decide light vs. dark theme** and how much of the Sevora template's typography/spacing to actually adopt (§5) — not yet decided.
7. **Apply the agreed home page copy (§8) to the actual Figma file**, then eventually to the live Framer site — none of it has been applied anywhere yet, it only exists in chat and in this document.
8. Once copy + visual direction are both settled, produce the mockup the user asked about earlier (comparing current home page vs. template-inspired typography/cards applied to the new copy) — this was offered twice in the conversation and deferred both times in favor of copy work first.

## Adidas dashboard redesign ("Sales Desk")
File HNs8Ge4CJupGPpK6COlk8c, page "Redesign v2 — Sales Desk" (3:2). Originals on page 0:1 untouched.
Tokens: "Sales Desk / Tokens" collection. Fonts: IBM Plex Sans + IBM Plex Mono (numbers).
Screens: S1 Today 4:2 · S2 Pipeline 6:2 · S3 Deal detail 7:2 · S4 Forecast 9:2 · S5 Accounts 11:8 ·
S6 Needs attention 12:8 · S7 Reports 13:8 · S8 States 14:8 · S9 Navigation before/after 14:91.
Prototype flow "Sales Desk — end-to-end" starts at S1. All figures are sample data (chip in top bar).
Note: paint opacity is dropped when binding a variable via setBoundVariableForPaint; use a token or node opacity.
Next: rebuild into portfolio file and update Adidas case study 124:1219.

## Adidas dashboard v3 ("Stride for adidas", 8-hour-believable version) — CURRENT
File HNs8Ge4CJupGPpK6COlk8c, page "Redesign v3 — 8-hour sprint". Light theme continuing the wireframes, Inter, black top nav.
Tokens: "Stride / Tokens". Frames: 1 Dashboard 16:30 · 2 Alerts panel 18:8 · 3 Opportunities 17:8 · 4 Deal detail 18:282 ·
5 Customers 19:8 · 6 Revenue 19:204 · 7 Forecast 19:411 · 8 Reports 20:8 · 9 Export 20:156. Flow "Stride — 8-hour sprint" starts at 1.
Maps to the original 8 finals: AI insights -> "What's driving the forecast" notes on 7; Notifications -> alerts strip on 1 + panel 2; Exports -> modal 9.
Sales Desk page (v2) kept as an archived exploration.

## Adidas dashboard FINAL (v4, 5 screens) — CURRENT
File HNs8Ge4CJupGPpK6COlk8c, page "Redesign v4 — Final". Monochrome adidas-like UI, white sidebar, Inter + Barlow Semi Condensed (titles/numbers).
Tokens "Stride Final / Tokens". Screens: 1 Dashboard 29:30 · 2 Opportunities (deal panel inline) 30:8 · 3 Customers 31:8 · 4 Forecast 31:278 · 5 Reports (export panel) 32:8.
Flow "Stride — final (5 screens)". v3 and Sales Desk pages kept as archive.
Portfolio case study 124:1219: added "AI as an assistant" constraint (context section 124:1264), tools now "Figma, Miro, AI tools",
deliverables line now "5 final screens…". Still to do: replace the old final-screen images in the case study with these 5.

## Adidas case study rewrite (portfolio file, 124:1219) — DONE
Sections: 01 Opening (hero now new dashboard) · A2 beat · 02 Context (+AI note) · 03 Goals · 04 Discovery · 05 Process 182:2535 (new) ·
06 Prioritisation 126:1216 (matrix only) · A4 beat · 07 Testing 126:1292 (wireframes → new finals) · 08 Key decisions 182:2559 (6 decisions, crops) ·
09 Visual language 186:2710 (new) · 10 The product 129:1262 (5 screens + prototype button) · 11 Outcomes · A6 beat · 12 Reflection · Next.
Source screens rebuilt in portfolio file: section "Stride screens — source for Adidas case study" 177:1352 (S1 177:1375, S2 178:1352, S3 179:1352, S4 179:1622, S5 180:1352).
Crops are clones of these, so edit the source and re-crop if screens change. Prototype button has no link yet.
Reordered: … 06 Prioritisation · A4 beat · 07 Key decisions · 08 Visual language · 09 Wireframes to final designs (126:1292) · 10 The product …
Final order: … 06 Prioritisation · A4 beat · 07 Visual language 186:2710 · 08 Key decisions 182:2559 · 09 Wireframes to final designs 126:1292
(3 wireframe→final pairs + Opportunities/Customers + prototype button; separate "The product" section removed) · 10 Outcomes · A6 · 11 Reflection · Next.
