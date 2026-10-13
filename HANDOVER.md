# HANDOVER — Karthik Anupindi Portfolio Redesign

Last updated: 2026-10-12
Session: https://claude.ai/code/session_01JfDsrrcrD6ejfMG7kQkm1T
Repo: `/home/user/Portfolio`, branch `claude/vibrant-turing-me78qp` (remote `anupindikarthik529-prog/Portfolio`)

This file replaces the earlier HANDOVER.md, which still described the repo as empty and the early copy-only phase. Where this file and older notes disagree, this file wins.

---

## 1. Project goal

Redesign Karthik Anupindi's UX/UI portfolio and put it live.

- **Live site today:** https://karthikanupindi.framer.ai (Framer). **Never edit it.** It is reference only.
- **Design source of truth:** Figma file **`1PD7zKot98QgHWacUtWDLm`** ("Portfolio-2026").
- **Audience:** US hiring managers for **contract (C2C) UX roles**.
- **Positioning:** data-driven enterprise UX: complex operational and business problems turned into clear, usable systems, with credible outcomes.
- **Creative direction:** "Lyrical storytelling", inspired by the visual principles of Ed Sheeran's lyric videos (hand-drawn lines, margin notes, sketch-to-system) without copying any artwork.

**Agreed order of work (user's plan; don't get stuck looping on one page):**

1. Adidas case study, finalised. **Done.** Waiting on the user's confirmation that it's frozen (see §12).
2. INDYCAR case study. **Frozen (2026-10-12)** (§2.9).
3. VYBE case study. **First design pass done** (§2.10). Waiting on the user's one feedback round.
4. About page.
5. Build and go live. Hosting is undecided (see §7).
6. After launch: the ProTrans **Border Crossing** case study, then the **Design System** case study. Both will become the top projects.

**Ground rules from the user:**

- "Work with what I have": no new screen redesigns for INDYCAR or VYBE. Reuse the existing visuals with a new layout and copy.
- One design pass plus one feedback round per page, then freeze it.
- No separate mobile designs per case study.

---

## 2. What has been completed

### 2.1 Strategy and copy (early phase)
- Critiqued the old home page and the "Sevora" Framer template (`46:1462`). Verdict: borrow the craft, not the structure (the template's pricing and testimonials sections suit agencies, not this portfolio).
- Inventoried the copy of the old pages: Adidas `45:2388`, AI Agent `45:2884`, INDYCAR `45:3799`, VYBE `45:5718`, About `45:2073`.
- Extracted the resume (see §11).
- Project lineup decided: INDYCAR, AI Agent, Sales Dashboard (Adidas), VYBE. **IUPUI dropped.**

### 2.2 Superseded explorations (kept in Figma, don't build on them)
- `69:1059` "Home Page — Sevora Redesign", `82:1167` "CASESTUDY: Sales Dashboard — Sevora Redesign" and `94:1182` "CASESTUDY: AI Agent — Sevora Redesign", all on page "Portfolio" `45:235`. The user moved away from these to the Lyrical direction.
- Design directions A, B and C, plus D "Painted story frames", on page "00 — Design Direction". **A (Margin Notes) was chosen for the home page, and B's sketch-to-system opener is borrowed for case studies.** The D brush beats were later removed from the Adidas case study because they confused the user and a reviewer.

### 2.3 Lyrical system: foundations and components (Figma)
- Page "00 — Design Direction" `107:1197`:
  - Foundations `107:1237`
  - Directions `113:1197`, `113:1260` and `113:1324`
  - Draw-on-scroll interaction spec `114:1197`
  - Storyboard section `134:2301`, with the "Motion & voice rules v2" panel
- Page "02 — Components" `120:1197`:

  | Component | Node |
  |---|---|
  | Nav | `120:1207` |
  | Section Label | `120:1211` |
  | Margin Note | `120:1215` |
  | Project Row | `120:1227` |
  | CS / Section Heading (Label, Title, Intro) | `124:1201` |
  | CS / Decision (Label, Decision, Why, Trade-off) | `124:1213` |
  | CS / Pull Quote (Quote, Source) | `124:1217` |

- Variable collection **"Lyrical / Tokens"**: Paper #F3EDE1, Ink #20201E, Brick #A64B3C, Brick Light #D9826F, Sage #829078, Sage Strong #5F6D56, Muted #6D6A63, Soft line #D8D0C3.
- Fonts:
  - **Newsreader** for headings
  - **Inter** for body
  - **Caveat** in brick for pen notes and highlights
  - Gochi Hand for brush lettering, now unused on Adidas

### 2.4 Home page (Figma)
- Page "03 — Homepage" `121:1197`: Desktop `121:1198` (1440) and Mobile `123:1245` (390).
- Includes a hero pen line, project rows (instances of Project Row), beats and the contact line "Tell me about the system you're untangling."
- The Adidas row title was updated to the new case study title (instance text `I121:1264;120:1220`; mobile `123:1288`).

### 2.5 AI Agent case study ("Tandem"): DONE
- **Screens redesigned** in the XNode file `VpHjBjcQp0Tel5NC2WCsQU`, page "Redesign v2 — Tandem":

  | Screen | Node | Screen | Node |
  |---|---|---|---|
  | S1 Projects home | `2007:488` | S7 Delivery | `2009:951` |
  | S2 New project | `2007:729` | S8 Timeline | `2011:488` |
  | S3 Idea | `2008:488` | S9 States | `2012:488` |
  | S4 Requirements | `2008:933` | S10 Orchestration | `2012:571` |
  | S5 Spec | `2004:507` | S11 Journey map v2 | `2015:504` |
  | S6 Prototype | `2009:488` | | |

  - The prototype flow "Tandem — end-to-end" starts at S1.
  - The originals on page `0:1` are untouched.
- **Case study** `156:1268` on page "05 — Case Studies":

  | Section | Node |
  |---|---|
  | 01 Opening | `156:1269` |
  | 02 Context | `156:1555` |
  | 03 Process | `160:1349` |
  | Beat | `156:1841` |
  | 04 Journey | `157:1299` |
  | 05 Orchestration | `157:1329` |
  | 06 Layout options | `160:1373` |
  | 07 Key decisions | `157:1381` |
  | 08 Workspace | `158:1343` |
  | 09 Outcomes | `158:1579` |
  | Beat | `158:1607` |
  | 10 Reflection | `158:1627` |
  | Next project | `158:1640` |

  - Interaction specs: `167:1373`.
  - Source screens rebuilt in the portfolio file: section `154:1283`.
  - Tokens: "Tandem / Tokens".
- **Rules for this case study:**
  - Never mention a "first version".
  - The timeline reads "One-day design challenge".
  - Sections 7 and 8 were swapped at the user's request.

### 2.6 Adidas dashboard screens ("Stride"): DONE
- File `HNs8Ge4CJupGPpK6COlk8c`, page **"Redesign v4 — Final"**. The look is monochrome, close to adidas: white sidebar, Inter plus Barlow Semi Condensed SemiBold for uppercase titles and big numbers.
- Five screens:

  | Screen | Node |
  |---|---|
  | 1 Dashboard | `29:30` |
  | 2 Opportunities (inline deal panel) | `30:8` |
  | 3 Customers | `31:8` |
  | 4 Forecast | `31:278` |
  | 5 Reports (export panel) | `32:8` |

- Prototype flow "Stride — final (5 screens)" starts at `29:30`. URL:
  https://www.figma.com/proto/HNs8Ge4CJupGPpK6COlk8c/Adidas-SaaS-Dashboard?node-id=29-30&starting-point-node-id=29%3A30&scaling=scale-down-width
- Archived pages in the same file: "Redesign v3 — 8-hour sprint" (9 frames), "Redesign v2 — Sales Desk" and the original designs on `0:1`. The original case study mirror is `5:122`, not edited.
- Tokens: **"Stride Final / Tokens"**, present in both this file and the portfolio file:

  | Token | Value |
  |---|---|
  | bg | #F4F4F2 |
  | surface | #FFF |
  | ink | #111111 |
  | text | #2B2B2B |
  | muted | #6B6B6B |
  | faint | #9B9B9B |
  | line | #E5E5E2 |
  | lineStrong | #CFCFCB |
  | soft | #F1F1EF |
  | sel | #ECECE9 |
  | g1–g5 | #E3E3E0 → #111 |
  | red / redSoft | #D0312D / #FDECEB |
  | green / greenSoft | #1E7B4E / #E7F4EC |
  | amber / amberSoft | #B5600B / #FDF2E3 |

### 2.7 Adidas case study: DONE (pending freeze confirmation)
Frame **`124:1219`** "Case Study — Sales Dashboard (Adidas brief) — Desktop 1440", on page "05 — Case Studies" `124:1218`.

**Title:** "From Scattered Sales Data to Faster Revenue Decisions". The same title is used on the home rows, on the AI case study's next-project card `158:1643`, and in `web/src/data.ts`.

| # | Section | Node | Current content (summary) |
|---|---|---|---|
| 01 | Opening | `124:1220` | Eyebrow "DESIGN CHALLENGE · SOLO · TIME-BOXED"; H1 `124:1231`; intro `124:1232`; tools "Figma, Miro, AI tools"; pen note "a challenge brief, not an adidas engagement". Hero illustration `124:1242`: sketch boxes at 55% linked by dashed pen paths to a 500px-wide dashboard crop, with the note "one view to act from". |
| 02 | Context and constraints | `124:1264` | "One designer, no users, no real data". Items: Solo / No real data / 2 testers / AI as an assistant. The reality-check box was **removed** at the user's request. |
| 03 | Goals | `124:1284` | "Make the numbers obvious and the next step clear". Four goals. Box `124:1301` is **"HOW I PLANNED TO TEST IT"** (latest change), with four columns: Real users of sales data / Two rounds / Cognitive walkthroughs / Tasks, not opinions. It replaced "What a quantitative round would measure", which repeated the Outcomes box. |
| 04 | Discovery | `124:1310` | "Research pointed to clarity and scalability over customization". Order: Clarity, Predictive, Scalability, Personalization (planned for the next phase). |
| 05 | Prioritisation | `126:1216` | "Simpler navigation and up-front KPIs save the most time and effort". Matrix `126:1221` centred; no "how to read it". |
| 06 | Process | `182:2535` | "Broke the problem into smaller chunks". AI handled research and copy drafts; Karthik did the brainstorming and refining. Five steps. |
| 07 | First direction | `223:1222` | "The wireframes reported. They needed to rank." Three wireframes with a pen arrow ("the alerts lived up here"), the round-one findings, the turn (alerts sat in the top right; teams need them in front of their eyes), and the insight pull quote with a pen note. |
| 08 | Key decisions | `182:2559` | "Six decisions that turn reports into actions". Six CS / Decision blocks with screen crops and two pen notes. |
| 09 | Final designs | `126:1292` | "Five screens that put the next action first". Dashboard 1280 wide, then two rows of two, with captions. Pen note. Button "Try the clickable prototype", whose text is hyperlinked to the prototype URL. |
| 10 | Visual language | `186:2710` | Moved here, after the final designs. |
| 11 | Outcomes and evidence | `129:1277` | "Testers scanned the screens and acted with ease, a clear step up in usability". Sections: deliverables / observed in testing (round one and round two) / measured in production: none. Box "WHAT I WOULD MEASURE NEXT". **Some copy was hand-edited by the user in Figma; don't overwrite it.** |
| 12 | Reflection | `129:1307` | Prioritisation as the real design work. "With more time" items: Usability testing / Per-role views / Alert rules / Trust. |
| — | Next project | `129:1323` | |

- **Source screens** for every crop are rebuilt in the portfolio file, in section `177:1352` "Stride screens — source for Adidas case study": S1 `177:1375`, S2 `178:1352`, S3 `179:1352`, S4 `179:1622`, S5 `180:1352`. Crops are clones of these, so edit the source and re-crop if the screens change.
- **Removed:** the brush beats `137:1516`, `137:1627` and `137:1730`; the reality-check box; "Not measured yet"; "How to read it"; the "page-per-data-type" story.
- **Pen highlights** (Caveat, brick) appear in six places: hero, wireframe alerts, first-direction quote, two key decisions, final designs, outcomes ("found the alerts on their own"). Keep them sparse.

### 2.8 React home page prototype (`web/`)
- Built with React 19, Vite 8, Tailwind 4, Motion and TypeScript, with Lora and Instrument Sans (from the earlier Sevora-style phase, **not** the Lyrical fonts). Effects live in `src/components/fx.tsx`.
- Preview artifact: https://claude.ai/artifact/QRj1DUZSi4zTx5i4yYuEAp
- It is a prototype of the **Sevora-era home page**, not the Lyrical design. If the React route is chosen for launch, it needs restyling to the Lyrical system (Newsreader, Inter, Caveat, paper and ink) and the remaining pages need building.


### 2.9 INDYCAR case study: FROZEN (2026-10-12)
Frame **`238:1383`** "Case Study — INDYCAR (NTT INDYCAR) — Desktop 1440", on page "05 — Case Studies" at x = −1740 (left of Adidas). It is vertical auto-layout like `124:1219`, with sections in absolute layout. Built from the Lyrical tokens, CS / Section Heading instances and CS / Pull Quote clones. Every image reuses the image fills (imageHash) from the mirror `45:3799`, displayed at or below native resolution. No new screens were designed.

**Title:** "How an Information Architecture Rebuild Cut Bounces 25% and Kept Fans 30% Longer in Testing" (H1 at 52/58, 660 wide, 4 lines). The same title is on home rows `I121:1232;120:1220` and `123:1266`, and in `web/src/data.ts`.

| # | Section | Node | Content (summary) |
|---|---|---|---|
| 01 | Opening | `238:1384` | Eyebrow "CLIENT ENGAGEMENT · NTT INDYCAR · 10 MONTHS"; H1 at 56px (longer title than Adidas); intro; Role Lead UX Designer / Timeline 10 months / Team Four people / Tools Figma, Miro, Google Analytics, Maze; pen note "some detail held back under NDA". Hero `238:1406` (renamed "Opening illustration — redesigned INDYCAR 101 screens"): **only the five-phone redesign mockup** (`238:1409`, 640×319, native 1024×511). The old "What is INDYCAR?" screen, its note and the converging path were removed at the user's request. Pen arrow `238:1412` plus note `238:1411` "One place to dive into INDYCAR experience" (user wording, centred under the mockup) point at the centre phone. **Note:** the H1 and ROLE were later hand-edited in Figma (H1 "How an Information Architecture Rebuild and App Redesign Increased INDYCAR Fan Retention by 30%", ROLE "Lead UX Designer"). Don't overwrite them; the retention wording vs the session-duration-in-testing metric was flagged to the user. |
| 02 | Context | `238:1413` | "A fast sport with an app that felt slow". The items that repeated the hero (Lead designer / 10 months / Under NDA) were replaced with two columns taken from the old case study: THE CHALLENGE ("INDYCAR is fast, thrilling and high-stakes. But its digital experience? It wasn't keeping up.") and OUR MISSION ("Reimagine the INDYCAR digital experience to engage the next generation of fans."). |
| 03 | Problem and goals | `238:1427` | "New fans got lost, and regulars couldn't find race info". Three problem → goal rows with pen arrows. |
| 04 | Discovery (old app audit) | `238:1450` | "Weak information architecture buried the basics under menus and text". Intro (user's context, 2026-10-12): "Fans, new and old, wanted to learn more about the sport, from the rules to the cars, and couldn't find where. The app already had a section for exactly that: INDYCAR 101. It sat in the hamburger menu, near Settings. The plan was to move it somewhere prominent, so we first audited the section itself to see what else was holding it back." The Ambiguous navigation finding now reads "Inside the menu, INDYCAR 101 looked like any other link, with nothing to say it was the place to start." Four old-app screenshots; findings: Ambiguous navigation / Content overload / Disorganised layout. Pen note "a spec sheet, not a car". |
| 05 | Research | `239:1400` | "Fans weren't disengaged. They were overwhelmed." Competitive findings (F1, NBA, cricket, WWE). David Craske pull quote, verbatim; pen note "this became the brief". |
| 06 | Information architecture | `239:1419` | "One front door for new fans, six paths from there". Sitemap at 1024px on an evidence surface; pen note "INDYCAR 101 gets its own front door"; Clear hierarchy / Streamlined navigation. |
| 07 | Process | `239:1434` | "Crazy 8s first, then wireframes the fan team could react to". The five numbered steps (User research → User testing) were removed at the user's request; the heading is followed directly by the sketches and lo-fi wireframes at equal height. Section height is 969. |
| 08 | Iterations | `241:1411` | "Round one put more on screen. Round two made it faster to use." Iteration 1 (3 screens) and Iteration 2 (3 screens). Mirror screen `45:4330` was dropped because it is a half-transitioned overlay. Iteration 1's first screen still shows the draft placeholder "VIDEO???" (it's real iteration evidence). |
| 09 | Final designs | `241:1448` | "Rules, cars and drivers became things to explore". **All eight final screens are scrollable phone frames** (`overflowDirection: VERTICAL`, clipped, phone-ratio 430:932, radius 12% of width, soft shadow), showing the full-length screen images from the mirror. Top row is 296×642: Beginner's guide `241:1453`, Anatomy `241:1457`, Teams `241:1461`, Drivers `241:1465`. Bottom row "Rules and track guides" uses the **same 296×642 size and column grid** as the top row (x 80/408/736/1064), with its title and caption above the row: `241:1474`/`1476`/`1478`/`1480`, each with a caption styled like the top row. How a race works and Championship had transparent side margins in the source image, so their Screen rects are enlarged (319 and 301 wide) and offset left (x −9.3 and −2.7) to fill the phone edge to edge. Flags and Championship had no status bar in the source, so each has a 296×44 clipped "Status bar (from Road & street screen)" strip at the top, cut from the Road & street image. **Open:** the user wants Flags, Road and street, and Championship to be fully scrollable, but their source images are cut off at 2048px (the html.to.design import cap). That needs full-length exports from the user's original INDYCAR design file; a search of this file for alternatives was stopped by the user. **Jump chips were added and then removed at the user's request; don't re-add them.** Flags, Road and street, and Championship were cut off at import (capped at 2048px), so they get a white bottom fade and "continues in the walkthrough ↗". A hint line at the top right reads "Every screen scrolls. Try it inside the phones." Pen note "a car you can take apart". Button `241:1482` "Watch the prototype walkthrough ↗" links to the Loom: https://www.loom.com/share/3893138f24ce43e6a268bd34ddbd6227. The page flow start point is "INDYCAR case study". Interaction spec: frame `254:1422` "INDYCAR case study — Interaction specs", below the case study (1 · Scrollable phones, 2 · Walkthrough link). |
| 10 | Outcomes | `242:1451` | "Sessions ran 30% longer and bounces fell 25%". Engagement (30%, 25%) / Usability (4.8/5 SUS, 85%) / Stakeholders (4.9/5). Fan pull quote, verbatim from the mirror, sourced "Fan feedback on the redesign". |
| 11 | Reflection | `242:1475` | Cloned from Adidas's dark reflection. "What comes next": 3D car model / More video / Behind the scenes (the mirror's Next Steps). |
| — | Next project | `242:1485` | Clone of the Adidas next-project block, pointing to the AI Agent case study (home order: INDYCAR → AI Agent). |

- Six pen highlights in total, matching Adidas.
- The copy is rewritten from the mirror with the humanizer rules: no emoji bullets, and none of the old boilerplate lines. Every number and both quotes are taken verbatim from the mirror.
- The mirror also linked a "detailed case study" PDF on Google Drive (`drive.google.com/file/d/1BM1YiOHH-iiMBbjjD44xUrj_6VfKSIxl`). It isn't used in the new frame; ask whether to include it.

### 2.10 VYBE case study: FIRST PASS DONE (awaiting the feedback round)
Frame **`269:1422`** "Case Study — VYBE (Academic project) — Desktop 1440", on page "05 — Case Studies" at x = −3440 (left of INDYCAR). It was built by **cloning the frozen INDYCAR frame** as a template and reworking every section, so type, spacing, components and the paper palette match. All images reuse image fills from the mirror `45:5718`. The six final screens are **clones of the mirror's real layered screens**, not images. Page flow start point: "VYBE case study".

**Title:** "VYBE: Trading “Journaling” for a 1-Minute Daily Habit" (same as the home row).

| # | Section | Node | Content (summary) |
|---|---|---|---|
| 01 | Opening | `269:1423` | Eyebrow "ACADEMIC PROJECT · GRAD SCHOOL · 6 WEEKS"; intro (team of four; I did research, product strategy, MVP definition, usability testing); Role UX Designer / 6 weeks / 2 UX researchers, 2 UX designers / Figma, Miro; pen note "a grad-school project, so no launch numbers". Hero `269:1437`: the mirror's five hero phones (`45:5747`–`5755`) at 64%, pen note "a check-in, not a journal". |
| 02 | Context | `269:1441` | "Teens wanted less scrolling, not another chore". THE PROBLEM / THE CHALLENGE (HMW) columns. |
| 03 | Problem and goals | `269:1449` | "Three habits to break, three goals to design for". Three problem → goal rows taken from the mirror's problem and challenge lists. |
| 04 | Research | `269:1469` | "People wanted a break from social media, not more homework". Story poll (`45:5955`, pen note "85% had thought about a break"), two public posts (`45:5957`, `45:5959`), Calm/Headspace/Stoic tiles. Findings: Unbiased interviews (8 students and working professionals) / Watching routines / Competitive analysis. |
| 05 | Synthesis | `269:1490` | "Gratitude had to be effortless, or nobody would keep it up". Three insights, an image row (empathy map and card sort on white cards, sticky-note photo), pull quote "If gratitude felt like a habit, not a task, teens would engage." (source "Our working hypothesis"), pen note "the bet VYBE was built on". |
| 06 | Concepts | `269:1504` | "Testers picked an app over two gadgets". Pie image `45:6039` on the evidence surface with a native legend: Gratitude Tracker 62.5% / Focused Device 25% / Community Bracelet 12.5% (colour mapping read from the mirror's label positions). Pen note "no extra hardware to carry". WHAT THE MVP KEPT: 1-minute gratitude prompts / Gamified streaks / Private social sharing. |
| 07 | Process | `269:1516` | "Fast sketches first, then lo-fi flows to test". Crazy 8s sketches `45:6097` and lo-fi wireframes `45:6103`, both 620 tall. No numbered steps. |
| 08 | Iterations | `269:1522` | "Testing with 15+ users made VYBE calmer and easier to follow". Iteration 1 image `45:6112`; iteration 2 image `45:6125` with the three mirror changes (dark mode, clearer navigation, rebalanced hierarchy). |
| 09 | Final designs | `269:1554` | "Six screens built around a one-minute check-in". Six cloned screens in 340×736 phone frames, 3×2: Home (`45:6152`), Check-in questions (`45:6395`), Reflection space (`45:6547`), Challenges and stats (`45:6891`), Rewards (`45:6683`), Social media usage (`45:7183`). Captions come from the mirror's annotations. The **Social media usage phone scrolls** (overflow VERTICAL; screen extended to 992 to reach Focus Mode). "Opened 1 times" fixed to "Opened 1 time"; the Instagram label box widened to stop it wrapping. Pen note "250 characters, then you’re done" on Reflection space. There is no prototype button: the mirror had no prototype link, only a still. |
| 10 | Outcomes | `269:1602` | "Tested with 15+ users. Not launched, so no launch numbers." Groups: In testing (15+, 2) / Concept test (62.5%, 3) / At launch, we’d track (Retention and daily engagement, Drop-off, Satisfaction). WHAT TESTING CHANGED: the five mirror findings. |
| 11 | Reflection | `269:1621` | Behaviour over UI; the lesson "the best UX doesn’t demand behaviour change". WHAT COMES NEXT: Freemium model / School partnerships / Corporate well-being. |
| — | Next project | `269:1631` | Points to INDYCAR, using INDYCAR's current H1 and five-phone mockup. The visual container `269:1637` is warm #EAE3D6 with the concept surface's radius and stroke (no white); the mockup is inset 36px on every side (FIT). |

**Feedback round 1 (2026-10-13), applied:**
- Hero: removed the eyebrow ("ACADEMIC PROJECT · GRAD SCHOOL · 6 WEEKS"), the margin note "a grad-school project, so no launch numbers", and the hero pen note "a check-in, not a journal" with its arrow. The left column moved up 30; the hero frame was trimmed to 492 tall; 01 is now 768.
- 05 Synthesis: the three images now sit on the same grid as the text columns (x 80/510/940, 400×300, 30 gutters); captions are under each one. The photo is FILL; the empathy map and card sort are FIT on a warm #EAE3D6 card.
- 06 Concepts: evidence surface changed from white to warm #EAE3D6 (soft-line stroke kept). Use this tone instead of white for any evidence surface in VYBE.
- 07 Process: gap between sketches and wireframes increased from 48 to 96.
- 09 Final designs: **Home phone scrolls** too (screen extended to 865). Its TabBar was moved into the phone frame as the top child with `numberOfFixedChildren = 1`, so it stays pinned while the content scrolls.
- The eyebrow, pen-note and hero rows in the 01 table above are out of date; this list wins. Pen highlights left: "85% had thought about a break", "the bet VYBE was built on", "no extra hardware to carry", "250 characters, then you’re done".
**Round 2 (2026-10-13):**
- The user confirmed the 85% story poll is theirs. The caption now reads "A story poll I ran during research".
- **New section 10 · Prototype** `280:1197` after Final designs: "See VYBE in motion" / "A recording of the clickable prototype, playing on a loop." Video placeholder frame `280:1206` (1280×800, 16:10) uses the still `45:7456` from the current portfolio as its poster, plus an annotation pill "VIDEO PLACEHOLDER · existing VYBE prototype video · autoplay, muted, loop" (named "Annotation — … (hide before export)"). The user has the real video; it isn't Loom, so it gets embedded on the page and autoplays.
- Outcomes renumbered to **11** and Reflection to **12**.
- Interaction spec frame `281:1916` "VYBE case study — Interaction specs" sits below the case study: 1 · Prototype video (autoplay muted loop playsinline, pause out of view, reduced motion shows the poster), 2 · Scrollable phones.
- Six pen highlights in total.
- WhatsApp's icon is blank in the Social media usage screen. It's blank in the mirror too; the source image is missing.
- The Adidas next-project link still points to AI Agent (frozen; left alone).


### 2.11 Home page pass 2 and About page (2026-10-13), awaiting the feedback round
The user confirmed all four case studies are done (VYBE included).

**Home (`121:1198` desktop, `123:1245` mobile):**
- Removed all three brush-lettering beats on both desktop and mobile (H3 "Four problems", H4 habits drawing, H6 "Let's make it clear"), at the user's request.
- Hero: removed the brush end of the signature line (segments 5–6 and the bristles); segments 1–4 are now 2px pen weight and end in a pen arrowhead pointing down. Hero height is 760.
- Removed the leftover "Context chip" overlays on the project images (desktop and mobile); they duplicated each row's label and used the old 8.6px Instrument Sans.
- INDYCAR row: title copied from the case-study H1 (the user's wording, "…Increased INDYCAR Fan Retention by 30%"); meta "Lead UX designer · 2023". Mirrored in `web/src/data.ts`.
- Adidas row description: "Sales data sat across reports, trends, exports and alerts. Under a tight time box, I designed one dashboard that ranks what needs attention first." The meta keeps "8-hour challenge".
- How I think: one example per project now. Map the real workflow (AI Agent) / Fix the structure before the surface (INDYCAR) / Spend effort where impact is highest (Sales Dashboard) / Let testing change the design (VYBE, 15+ users). The old "alerts got stronger cues" line contradicted the final Adidas story and is gone.
- Where I've worked: The Heart Center "UX/UI Designer · 2024–2025", TCS "Systems Engineer / UX Designer · 2019–2021", NTT INDYCAR "UX Designer · 2023" (from the resume).
- Mobile project rows were re-laid out with fixed gaps (rule → image +24, image → label +18, then title, problem, meta and link), so the longer titles don't overlap.
- Contact links (desktop and mobile): Resume (PDF) → https://drive.google.com/file/d/1EbvfEBWWpgXVhEKMM-i15NeitrJVQAJg/view (from the live site's nav); LinkedIn → https://www.linkedin.com/in/karthikanupindi/; email → mailto.

**Home feedback round 1 (2026-10-13), applied:**
- Hero margin note "start here: the real workflow" and its arrow removed (they repeated the intro). Mobile orphan signature line `123:1256` removed; mobile hero is now 640 tall.
- **Row visuals now match the case studies** (desktop 400×302, mobile 342×259). Each sits on a warm #EAE3D6 inner panel (r8, padded) and holds a clone of that case study's resolved product view: INDYCAR five-phone mockup (`238:1409`), AI Agent Tandem workspace (`156:1307`), Adidas Stride dashboard (`226:4190`), VYBE five hero phones (from `269:1437`). If a case-study hero changes, re-clone it here.
- How I think: the evidence lines were removed. Each habit now has a small project tag (AI AGENT / INDYCAR / SALES DASHBOARD / VYBE), right-aligned on desktop and below the habit on mobile; rows are 96px apart.
- Section order (desktop and mobile): Hero → Selected work → How I think → **About → Where I've worked → What colleagues say** → Contact.
- **"What colleagues say"** (desktop: three columns of 400, Newsreader Italic 19/28; mobile: stacked) holds three testimonials:
  - Edgar Ernesto Escobar Sanabria, "UX/UI Design Specialist, ProTrans · LinkedIn recommendation". Verbatim from his public LinkedIn recommendation.
  - Spencer Haynes, "Senior Product Manager, ProTrans" (from his LinkedIn). Verbatim from a message he wrote for the portfolio.
  - Effy Hernandez, "Director, Logistics Expedites, ProTrans" (from her Teams profile). **This is a reworded version of her private message, drafted with the user** (attention to detail; easier everyday work of building features and products; "invaluable and successful"). The user approved it. **Effy must approve the exact wording before launch**; if she changes it, update the quote. Her contact details from the screenshot are not used anywhere.
  - Not used: Anthony Jones (a farewell message only; the user asked him for a LinkedIn recommendation). Never invent testimonials.

**About page:** new page **"06 — About"**, frame **`290:1198`** "About — Desktop 1440" (vertical auto-layout, paper fill). Desktop only; no mobile version.
- 01 About me: Nav instance, plus a clone of the home About block (portrait). "A UX designer who turns complexity into clarity." The bio covers seven years across sectors and the MS HCI, with dance, photography and travel in one line. "Download my resume ↗" is hyperlinked.
- 02 How I got here: a clone of How I think, with three moments from the mirror (Many places, one lens / The robotic arm / Design that earns trust), numbered 01–03 instead of checkmarks.
- 03 Experience: six rows of company / role · dates / one resume-verified outcome. INDYCAR has no numbers, because the resume's INDYCAR numbers may describe a different project.
- 04 Education: MS HCI (Indiana University, Luddy) / B.Tech E&I (SASTRA) / University Innovation Fellow (Stanford, 2022–23).
- 05 Skills and tools: four columns from the resume.
- 06 Contact: a clone of the home contact section, with links wired.
- **Dropped at the user's request:** the "About my Branding" section (logo and neon colour story) and the "World Through My Lens" photo gallery.
- Not wired: home "About & resume" / "More about me" → the About page (Figma prototype links don't cross pages); do this at build.

---

## 3. Current state

- **Frozen or done:** the AI Agent case study, and the Adidas screens and case study. Adidas only needs the user's "frozen" confirmation.
- **INDYCAR:** frozen (`238:1383`, §2.9).
- **VYBE:** first pass built (`269:1422`, §2.10). It needs the user's feedback round, then freeze.
- **About:** first pass built (`290:1198`, §2.11). **Home** pass 2 done (§2.11). Both await the user's feedback round. Their content lives in the html.to.design mirror on page "Portfolio" `45:235`: INDYCAR `45:3799`, VYBE `45:5718`, About `45:2073`. Backup copies are on page "Portfolio(Backup)" `46:3178`.
- **Backup page** `46:3178` also holds `220:2441` (an Adidas case study copy) and `220:6486` (an AI Agent case study copy). Their origin isn't recorded in this session's notes; they're probably snapshot copies. Treat `124:1219` and `156:1268` on "05 — Case Studies" as canonical.
- **Page "Case Study: Border Crossing"** `0:1` exists, with real ProTrans screens (Dashboard `1:7769`, Row Actions `1:6721`, Last Notes `1:7249`, User Management `1:905`, Rejected Design `2:278`, Diagram_ThreeChannels `32:235`, and others). **It's out of scope until after launch.**
- **Git:** **push works now** (verified 2026-10-12). The branch `claude/vibrant-turing-me78qp` is on the remote, and the remote head matches local.
- **Web build:** `npm run build` and `npm run lint` both pass on the current tree (checked 2026-10-12).

---

## 4. Files created or modified (repo)

| File | Status |
|---|---|
| `HANDOVER.md` | This file (rewritten). |
| `web/` (whole folder) | Created in commit `1cead17`: `package.json`, `vite.config.ts`, `index.html`, `src/App.tsx`, `src/main.tsx`, `src/index.css`, `src/data.ts`, `src/components/fx.tsx`, `src/assets/*.webp` (indycar, agent, dashboard, vybe, photo, logo), tsconfigs, `.oxlintrc.json`, `README.md`. `dist/` and `dist-single/` are build outputs. |
| `web/src/data.ts` | The Adidas project title changed to "From Scattered Sales Data to Faster Revenue Decisions". `RESUME` is still the placeholder `'#resume'`. |

Everything else lives in Figma (§2). Local commits since `1f019e7`: `1cead17` (web), then a series of "Handover: …" and "Adidas case study: …" commits up to `933feaf`.

---

## 5. Important decisions and assumptions

**Content integrity (hard rules):**
- Never fabricate metrics, quotes, research, interviews or outcomes.
- Separate verified deliverables, observed testing findings and measured production outcomes.
- **Adidas:** testing was qualitative only. There were two rounds with two business-focused users (wireframes, then the final designs) plus peer walkthroughs, and no quantitative data. All on-screen figures are sample data. The old "~30% faster / ~25% less cognitive load" claims were dropped.
- The **15% border-crossing wait-time cut** (ProTrans) was measured and is fine to publish.
- Treat **Border Crossing client names as sensitive**.

**Positioning and copy:**
- **Never state visa or work-authorization status.** The role goes in the hero, but **not the word "C2C"**.
- Voice: confident and crisp. No "helped". Headings are concise takeaways that summarise the section, not intros. Run the humanizer skill on new copy.
- Use "time-boxed" or "time constraint" rather than repeating "8 hours".

**Adidas specifics:**
- It's a design challenge, not an adidas engagement (stated in the hero pen note).
- The five final screens were made after the time-boxed sprint, informed by testing and AI assistance: "used AI to generate realistic sample data, draft microcopy and explore layout variations; every screen was designed and refined by me in Figma". The story says the testing and decisions shaped the finals.

**Project framing labels:** "Client Engagement — NTT INDYCAR", "Design Challenge" (AI Agent and Sales Dashboard), "Academic Project" (VYBE).

**Final project order once ProTrans exists:** ProTrans Border Crossing → ProTrans Design System → INDYCAR → AI Agent → Sales Dashboard → VYBE.

**INDYCAR numbers:** use only the numbers in the case study itself: 30% session-duration increase, 25% bounce-rate drop, 4.8/5 SUS, 4.9/5 stakeholder rating, 85% feature preference, plus the named stakeholder quote from David Craske. The resume's NTT INDYCAR line ("learning app, session 30→50 min, +25 satisfaction") may describe a different project. Don't mix the two sets.

**Home page row titles** (latest; some have evolved since the earlier chat lists):
- "How an Information Architecture Rebuild Cut Bounces 25% and Kept Fans 30% Longer in Testing"
- "Designing Trust Into an AI Agent Workflow for Enterprise Teams"
- "From Scattered Sales Data to Faster Revenue Decisions"
- "VYBE: Trading 'Journaling' for a 1-Minute Daily Habit"

**Motion intent** (for the build): draw-on-scroll pen lines; brush paints on once at 35% visibility (700ms ease-out); lettering fades in over 300ms; only the signature line is scroll-scrubbed; reduced motion shows the final state.

**Prototype on the site:** either a looping video of the Figma prototype (to be recorded at build time) or a button that opens the Figma prototype in a new tab. The button link is already set.

---

## 6. Figma working notes (how to work in these files)

- **Tools:**
  - `use_figma` runs Plugin API JS, up to 50k characters. Pass `skillNames: "resource:figma-use,resource:figma-generate-design"`. A run that errors rolls back **atomically**.
  - `get_screenshot` needs `enableBase64Response: true`, because downloading from figma.com via curl is blocked.
  - Frames **can't be copied between files**, so rebuild screens by script in the target file (this is how the Stride and Tandem source sections were made).
- **Fonts:** Inter's style name is `"Semi Bold"`; Barlow Semi Condensed's is `"SemiBold"`. Load fonts before setting `characters`.
- **Paints:** paint opacity is lost when binding via `setBoundVariableForPaint`. Use a token or a plain paint with opacity instead.
- **Headings:** `findAll` doesn't descend into instance sublayers in clones. Access the heading as `sec.children.find(n=>n.name==='CS / Section Heading').children.find(x=>x.name==='Title')` (or `'Label'` / `'Intro'`).
- **Layout:** the case study frame `124:1219` is **vertical auto-layout**, so sections reflow when they change height. Inside sections the layout is mostly NONE (absolute): after a text edit, shift the siblings below it and resize the section.
- **Crops:** clone a source screen into a clipped frame. Set the clone to `x=0, y=0` before scaling and offsetting.
- **Prototype links:** use `setReactionsAsync([{trigger:{type:'ON_CLICK'},actions:[{type:'NODE',destinationId,navigation:'NAVIGATE',transition:null}]}])`. Links to a node's own top-level frame are rejected. Set start points with `page.flowStartingPoints`.
- **Text hyperlinks:** `textNode.hyperlink = {type:'URL', value}`.
- **Old html.to.design pages:** Framer imports contain opacity-0 animation states, `::after` rectangles that need `insertChild(0, …)`, and constraints that shift nodes on resize (set them to MIN).
- **Text lookup:** `findOne` can match a FRAME named like a text node. Filter by `type==='TEXT'`.

---

## 7. Hosting decision (open)

**Option A: Framer.** The user rebuilds the pages in Framer from the Figma designs.

**Option B: the React site in `web/`, deployed via Vercel or Netlify.**
- Needs GitHub push access fixed first (§9).
- Needs a Lyrical restyle and the remaining pages (case studies, About).
- `RESUME` in `data.ts` needs a hosted PDF.

Not decided. Ask the user when step 5 arrives.

---

## 8. Commands and tests run

- `cd web && npm install`, `npm run dev`, `npm run build`, `SINGLE=1 npx vite build --outDir dist-single`, `npm run lint` (oxlint).
  - Last check, 2026-10-12: the build succeeds (Vite, about 0.8s) and the lint is clean.
- Figma MCP:
  - `get_metadata`, `get_screenshot` (base64) and `use_figma` across files `1PD7zKot98QgHWacUtWDLm`, `HNs8Ge4CJupGPpK6COlk8c` and `VpHjBjcQp0Tel5NC2WCsQU`.
  - Every structural change was verified with a screenshot.
- Resume extraction: `unzip` the .docx, then a Python regex over `word/document.xml` (pandoc isn't installed).
- `git commit` many times, and `git push -u origin claude/vibrant-turing-me78qp`, which **fails with 403** (§9).
- There are no automated tests in the repo.

---

## 9. Errors, failed attempts and unresolved issues

**Blocking or unresolved:**
- ~~GitHub push returns 403.~~ **Resolved 2026-10-12:** `git push -u origin claude/vibrant-turing-me78qp` succeeded, and every earlier local commit is now on the remote.
- **INDYCAR metrics: resolved 2026-10-12.** The user confirmed that 30% and 25% **came from testing**, not production. The title ends "in Testing", the Outcomes heading reads "In testing, sessions ran 30% longer and bounces fell 25%", and the group is labelled "Engagement in testing". Never present them as launch results.
- **INDYCAR role: resolved.** UX designer who also led a team of four (two UX researchers and one UI designer). The hero reads ROLE "UX Designer and team lead" and TEAM "2 UX researchers, 1 UI designer, me". Home rows (desktop `I121:1232;120:1222`, mobile `123:1268`) read "UX designer and team lead · 2023".
- ~~INDYCAR metrics context (question for the user):~~ the mirror lists 30% session duration and −25% bounce rate under "Impact: UX & Business", next to testing methods. It doesn't say whether these were measured in production analytics or in testing. The new frame groups them as "Engagement" without claiming either. Confirm with the user before adding a "measured after launch" label.
- **Adidas prototype sharing:** the user must set link-view sharing on Figma file `HNs8Ge4CJupGPpK6COlk8c`, or the "Try the clickable prototype" link won't open for recruiters.
- **No prototype video:** it can't be recorded from this environment. Do it at build time.
- **AI Agent open items:**
  - The TaskMaster consumer example sits under an "enterprise teams" title.
  - The interaction ideas (playable agent flow, layout tabs, sticky progress tracker, pinned comments) aren't specced.
- **Copy issues in the old INDYCAR and VYBE mirrors**, to fix during their rewrite:
  - VYBE: "Opened 1 times"; a fragment in Focus Mode: "…block all the social media apps from using."
  - Emoji bullets (✅❌🔹💡🎯📌) used inconsistently.
  - Recurring boilerplate lines copied across case studies: "Clarity over Complexity", "transform this output into an enterprise-wide solution…", "Courageous simplification outperforms exhaustive complexity".
- **Open copy questions from earlier:** About wording, and missing job titles for The Heart Center and TCS.
- **Optional, needs confirmation:** "reality check" boxes on the AI Agent case study were discussed. The user removed the one from Adidas, so ask before adding any.

**Failed attempts and workarounds (don't retry):**
- `curl` to figma.com asset URLs gets a 403 from the proxy, and `upload_assets` to mcp.figma.com is blocked. Use base64 screenshots for viewing and script rebuilds for moving screens.
- `WebFetch` on Instagram is egress-blocked.
- `pandoc` isn't installed.
- Long base64 images pasted into scripts got corrupted. If you must embed one, compress it, keep it under ~7KB per chunk, and checksum it.
- **Rejected design approaches:**
  - re-skinning the old home page ("not even 50% same")
  - an exact Sevora clone ("not exact replication")
  - dark navy generic SaaS screens, and the v2 Sales Desk ("too technical")
  - v3 Stride ("looks like wireframes")
  - the brush lettering beats on Adidas ("confusing")
  - green left-border callout cards ("look AI-generated")

---

## 10. Clear next steps

1. ~~Ask the user to confirm the Adidas case study is frozen.~~ **Confirmed frozen "for now" (2026-10-12).** The last change was the Goals box (§2.7). Also ask whether to keep or drop "What I would measure next" in Outcomes. The recommendation is to keep it, since it's now the only place that mentions future measurement.
2. ~~INDYCAR case study~~ **Frozen 2026-10-12.** Unanswered (left as is): 
   - Keep or drop the iteration-1 screen showing "VIDEO???"?
   - Link the Drive PDF "detailed case study"?
   - CS / Decision blocks weren't used, because the source has no trade-offs to report and inventing them would break the content rules. If the user wants a decisions section, they need to supply the trade-offs.
3. **VYBE case study:** the first pass is done (`269:1422`, §2.10). Next is the user's feedback round, then freeze. It's an academic project with no launch metrics; keep that framing.
4. **About page** (`45:2073`): rewrite in the Lyrical style. Keep it human and professional. Include the HCI background, experience, tools, resume and contact links.
5. Update the home page rows `121:1198` and `123:1245` if any titles change.
6. **Go live:** get the hosting decision from the user (§7).
   - For React: fix GitHub access, restyle `web/` to the Lyrical system, build the case study and About routes, add a hosted resume PDF, and deploy.
   - For Framer: hand over the Figma frames.
7. After launch: the ProTrans **Border Crossing** case study (page `0:1`; verified context in the user's original brief: no prior dedicated system; info lived across Optimiz, email and phone; six decisions; client names sensitive), then the **Design System** case study.

---

## 11. Resume facts (source: Karthik_Anupindi_UX_Resume.docx; the upload path is session-scoped and may be gone)

**Contact:**
- (317) 640-3934
- karthikanupindi98@gmail.com (the address used in `web/src/data.ts`)
- linkedin.com/in/karthikanupindi

**Experience:**
- **ProTrans International** — UX/UI Designer, Indianapolis, Jun 2025–present.
  - Developer-ready design system across 4 enterprise platforms.
  - Border-crossing workflows: **wait time cut 15%**.
  - Root-cause analysis for the Pickup Management and EDI teams.
- **KGS Technology Group** — UX Designer, remote, Feb–Jun 2025.
  - IA rebuild: task time −10%.
  - Analytics-driven flow refinement: errors −20%.
- **The Heart Center** — UX/UI Designer, remote, Mar 2024–Feb 2025.
  - 1,000+ users and 150+ hi-fi prototypes.
  - WCAG audits.
  - Satisfaction +20 points; daily completions 1.25×.
- **NTT INDYCAR** — UX Designer, Indianapolis, Jan–Dec 2023.
  - Touch-based mobile learning app: session time 30→50 min, satisfaction +25 points.
- **The Comet Lab, Indiana University** — UX Designer / Graduate TA, 2022.
  - Usability tests with 25+ participants.
  - Workshops: learner outcomes +15%.
- **Tata Consultancy Services** — Systems Engineer / UX Designer, Mumbai, Jun 2019–Dec 2021.
  - SEBI-compliant KYC flows: satisfaction +36% across 50K+ users.
  - Bounce rate −12.5%.

**Education:**
- MS Human-Computer Interaction, Indiana University (Luddy School).
- B.Tech Electronics & Instrumentation Engineering, SASTRA University.
- Stanford University Innovation Fellow, 2022–23.
