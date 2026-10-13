# HANDOVER — Karthik Anupindi Portfolio Redesign

Last updated: 2026-10-13
Session: https://claude.ai/code/session_01JfDsrrcrD6ejfMG7kQkm1T
Repo: `/home/user/Portfolio`, branch `claude/vibrant-turing-me78qp` (remote `anupindikarthik529-prog/Portfolio`). Everything below is committed and pushed.

This file is the single source of truth for the next session. §2 is the detailed history (newest at §2.18–2.22). §0 is the short version.

---

## 0. Quick start for the next session

**Where things are:**
- **Design:** Figma file `1PD7zKot98QgHWacUtWDLm`. All six desktop pages are final and match the website (§2.22).
- **Website:** a React build of all six pages in `web/`, with hand-drawn animations. Private preview: https://claude.ai/artifact/QhARcaUDaAuZLcwZvuxjDM (version 4; only the user can open it).
- **Next goal:** move the site into the user's **Framer** project "Portfolio Custom Domain" (`https://framer.com/projects/Portfolio-Custom-Domain--xEzmmvrjgYHm5r7ClkfC-4nwp6`, project ID `xEzmmvrjgYHm5r7ClkfC`).
  - The user said to **work on it directly**. They have taken a backup.
  - This is the project behind the live custom domain.
- **Blocked:** Framer was unreachable from the last session (§9.1). Check access first:

```bash
node --version                                   # need >= 24 (container ships 22)
[ -n "$FRAMER_API_KEY" ] && echo key || echo no-key
curl -sS -o /dev/null -w "%{http_code}\n" -m 10 https://api.framer.com   # 000 / CONNECT 403 = still blocked
```

**If access works:**
1. Install Node 24+ (§8).
2. Run `npx -y @framer/agent@latest setup`.
3. Run `npx @framer/agent@latest project auth xEzmmvrjgYHm5r7ClkfC "$FRAMER_API_KEY"`.
4. Run `npx @framer/agent@latest session new "<project link>"`.
5. Load the `framer` skill and follow its task map. Never print the key.

---

## 1. Project goal

Redesign Karthik Anupindi's UX/UI portfolio and put it live.

- **Live site today:** https://karthikanupindi.framer.ai (Framer).
  - Until 2026-10-13 the rule was "never edit it".
  - On 2026-10-13 the user asked to work directly in their Framer project "Portfolio Custom Domain" (backup taken; see §0).
  - The `.framer.ai` site itself stays reference only.
- **Design source of truth:** Figma file **`1PD7zKot98QgHWacUtWDLm`** ("Portfolio-2026").
- **Audience:** US hiring managers for **contract (C2C) UX roles**.
- **Positioning:** data-driven enterprise UX: complex operational and business problems turned into clear, usable systems, with credible outcomes.
- **Creative direction:** "Lyrical storytelling", inspired by the visual principles of Ed Sheeran's lyric videos (hand-drawn lines, margin notes, sketch-to-system) without copying any artwork.

**Agreed order of work (user's plan; don't get stuck looping on one page):**

1. Adidas case study, finalised. **Done.** Waiting on the user's confirmation that it's frozen (see §12).
2. INDYCAR case study. **Frozen (2026-10-12)** (§2.9).
3. VYBE case study. **First design pass done** (§2.10). Waiting on the user's one feedback round.
4. About page. **Done (§2.11), and included in the website.**
5. Build and go live. **Built as a React site in `web/` (§2.18–2.21). Going live through Framer is the user's chosen next step (§7).**
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
  - Edgar Escobar (shortened at the user's request), "UX/UI Design Specialist, ProTrans". Verbatim from his public LinkedIn recommendation; the source label is no longer shown.
  - Spencer Haynes, "Senior Product Manager, ProTrans" (from his LinkedIn). Verbatim from a message he wrote for the portfolio.
  - Effy Hernandez, "Director, Logistics Expedites, ProTrans" (from her Teams profile). **This is a reworded version of her private message, drafted with the user** (attention to detail; easier everyday work of building features and products; "invaluable and successful"). The user approved it. **Effy must approve the exact wording before launch**; if she changes it, update the quote. Her contact details from the screenshot are not used anywhere.
  - Not used: Anthony Jones (a farewell message only; the user asked him for a LinkedIn recommendation). Never invent testimonials.

**About page:** new page **"06 — About"**, frame **`290:1198`** "About — Desktop 1440" (vertical auto-layout, paper fill). Desktop only; no mobile version.
- 01 About me: Nav instance, plus a clone of the home About block (portrait). "A UX designer who turns complexity into clarity." The bio covers seven years across sectors and the MS HCI, with dance, photography and travel in one line. "Download my resume ↗" is hyperlinked.
- 02 How I got here: a clone of How I think, with three moments from the mirror (Many places, one lens / The robotic arm / Design that earns trust), numbered 01–03 instead of checkmarks.
- 03 Experience: six rows of company / role · dates (role column at x 880). The outcome descriptions were removed at the user's request. Under TCS sits a muted line "(Client: National Securities Depository Ltd., NSDL)"; the same line is on the home Where I've worked rows (desktop `121:1318`, mobile `123:1318`).
- 04 Education: MS HCI (Indiana University, Luddy) / B.Tech E&I (SASTRA) / University Innovation Fellow (Stanford, 2022–23).
- 05 Skills and tools: four columns from the resume.
- 06 Contact: a clone of the home contact section, with links wired.
- **Dropped at the user's request:** the "About my Branding" section (logo and neon colour story) and the "World Through My Lens" photo gallery.
- Not wired: home "About & resume" / "More about me" → the About page (Figma prototype links don't cross pages); do this at build.


### 2.12 Header hover interaction (2026-10-13)
- New component set **"Nav link"** `315:1269` on "02 — Components" (variants State=Default `315:1261` / State=Hover `315:1265`, TEXT property "Label").
  - Each variant holds the label, then a clipped "Draw mask" frame containing a 62px clone of Contact's brick hand-drawn underline. The mask is 0.01px wide in Default and FILL (the label's width) in Hover.
  - Default has ON_HOVER → CHANGE_TO Hover, SMART_ANIMATE ease-out 350ms, so the line reveals left to right like a pen stroke and retracts on mouse-out.
- The Nav component `120:1207` now uses Nav link instances for Work, About and Resume. Contact keeps its permanent underline (it's the CTA).
- This propagates to all eight Nav instances: home, About, and all four case studies, plus the two backup copies.
- Build spec (also in the component description): SVG path with stroke-dasharray/dashoffset, 350ms ease-out in and 200ms out; the same on keyboard focus; reduced motion shows the line instantly. Mobile uses "Menu", so it has no hover.
- Prototype start points added: "Home — desktop" (03 — Homepage) and "About — desktop" (06 — About).
- **Current-page state was removed** at the user's request: no link is underlined at rest. The Active variant was deleted, and **Contact is now a Nav link instance too** (the old "Contact link" frame with its permanent underline is gone). Every link draws its line only on hover.
- **Click actions** are set per Nav instance, on each nested link; the ON_HOVER CHANGE_TO reaction is kept alongside them.
  - Work: on Home, SCROLL_TO Selected work `121:1229` (scroll-animate ease-out 500ms). Elsewhere, it opens the home frame's prototype URL in the same tab.
  - About: opens the About frame's prototype URL (`…?node-id=290-1198`) in the same tab. Figma prototypes can't navigate across pages, so the URLs stand in until the site is built; there, these become `/#work` and `/about`.
  - Resume: opens the Google Drive PDF in a new tab.
  - Contact: `mailto:karthikanupindi98@gmail.com` with a pre-filled subject ("Hello Karthik, saw your portfolio") and a short draft body with placeholders for the sender.
- **Home CTAs:** "See selected work ↓" (button and text) scrolls to Selected work; "About & resume" and "More about me →" open the About page. The contact "Email me" button and the email address use the same mailto draft.
- Gotcha: changing a nested instance's State resets its Label, so re-apply `setProperties({Label: name})` after any state swap.


### 2.13 Home cleanup and portrait plan (2026-10-13)
- How I think: project tags removed (desktop and mobile). Intro now reads "Four habits I bring to every project. You'll see each one at work in the case studies above."
- **No repetition between home and About.** The real photo now appears only on the About page, and the experience table only on About ("Where I've worked" was removed from home, desktop and mobile). The home About block is text only: statement, plus a bio naming ProTrans, KGS, The Heart Center, NTT INDYCAR, Indiana University and TCS, and "More about me →".
- **Hero pen line:** it originally led into the removed "Four problems" beat, so it ended pointing at nothing. It was rerouted: the old segments and arrowhead were removed, and a new curve runs from the "clear decisions" circle to the portrait on the right (see below). The idea: on load, the line draws out of "clear decisions" and continues into a line portrait of Karthik that sketches itself, stroke by stroke.
- **Portrait done (original illustration, not a trace).** The user said it needn't be an exact likeness. The group "Sketch portrait" in the hero (`121:1199`, 280×340 at x 1080, y 330) contains "Line portrait — draw order top to bottom": 23 layers built from SVG, numbered in draw order.
  - It shows a young man with dark filled hair, round **brick** glasses, a filled beard, a turtleneck and crossed forearms with one hand visible, drawn in the site's pen style (ink #20201E, 2.2px round strokes).
  - The glasses are brick on purpose: the brick circle around "clear decisions" leads by pen line to the lenses ("seeing clearly").
  - The signature line ("Signature line — circle to portrait") runs from the circle to just short of the glasses, with its arrowhead drawn in the same vector.
  - Rejected first: auto-tracing the photo (crude likeness), and Figma's text-only generate_image.
- **Home interaction spec:** frame `333:1268` "Home — Interaction specs", below the desktop home. 1 · Signature line → portrait: on load, the circle draws (500ms), then the line (600ms), then the portrait strokes 01→23 (~1.2s, 40ms stagger, fills fade in); plays once; reduced motion shows the final drawing; the portrait is aria-hidden. 2 · Header links: hover/focus draw, the click map, nothing underlined at rest.
- Mobile: the portrait is placed below "About & resume" at 60% (centred; the mobile hero is now 852 tall). There's no line on mobile; the portrait draws on its own.


### 2.14 Portrait v3 and hero animation storyboard (2026-10-13), awaiting user review
- Portrait v3 (desktop hero and mobile clone): a **quiff** (filled hair sweeping up and back, with two paper-colour strand lines) and a **visible mouth**. The mouth is a paper-colour smile stroke drawn over the beard; the old ink mouth had been hidden under the beard fill. 24 layers, still in draw order.
- **Storyboard v1:** frame `337:1267` "Hero animation — storyboard v1" on "03 — Homepage" at x 2200. Six rough panels, each a portrait clone at 55% at a desk with a monitor, with title, timing and description:
  1. Settling in (0–0.8s, screen powers on, typing)
  2. Too much at once (0.8–2s, scattered widgets, hand to chin, "hmm…")
  3. The thing that matters (2–3s, points; brick circle on one widget, "this one first")
  4. Making order (3–4.4s, widgets slide into a row, motion arcs)
  5. A clear view (4.4–5.4s, KPI tiles, trend line, brick tile with a tick, "decided.")
  6. Back to the hero (5.4–6.2s, then hold; arms crossed = the current hero pose)
- Concept: the hero acts out the headline in about 6s; plays once on load, rests on panel 6, replays when the portrait is hovered; reduced motion shows panel 6.
- **Next:** the user reviews the storyboard, then animation (keyframe frames plus a Smart Animate prototype, then a build spec and Lottie or SVG for the site).


### 2.15 Hair v4 and storyboard v2 "The Untangle" (2026-10-13), awaiting user review
- Portrait hair v4: a **side part, swept across and back**, lower volume, with paper-colour strand and part lines (layers "02 · Hair (side part, swept back)" and "03 · Hair strands and part"). Applied to the desktop hero, the mobile clone and all storyboard v1 panels. Rejected: the quiff, then a tall swept version that read as a beanie.
- **Chosen concept (Claude's pick, at the user's request): "The Untangle"** (ideas #5 and #8 combined). Storyboard v2 is frame `340:1267` on "03 — Homepage" (x 2200, y 1320); v1 `337:1267` is kept at 50% opacity, marked superseded. Five panels, each a 47% clone of the live hero with a beat overlay:
  1. The tangle (0–0.6s): a coil scribble through "complicated systems"; he watches, arms crossed.
  2. The grab (0.6–1.2s): the loose end races to him; he uncrosses his arms and catches it.
  3. The pull (1.2–2.0s): he tugs, the coils unravel left to right, the line goes taut, with brick motion marks.
  4. The circle (2.0–2.6s): the freed line turns brick and draws the circle around "clear decisions", with an overshoot.
  5. Settle and hold (2.6–3.2s): arms crossed, smile, the line ends at the glasses; this is the current hero.
- It plays once on load, rests on panel 5, replays on hovering the portrait, and blinks every ~6s. Reduced motion shows panel 5. Build in Rive (state machine: intro, idle blink, hover replay), with a Lottie fallback. Mobile: show panel 5 plus the blink only.
- Arm poses in panels 2–4 are rough placeholders, to be redrawn in the animation pass.


### 2.16 "The Untangle", built as keyframes and a prototype (2026-10-13)
- Six keyframe frames on "03 — Homepage" (x 2200 / 3760, y 3200+, 2 columns), each a clone of the live hero with the same named layers so Smart Animate can interpolate between them:
  - `344:1267` Untangle 01 · The tangle
  - `344:1357` 02 · The grab
  - `344:1447` 03 · The pull
  - `344:1537` 04 · The circle
  - `344:1627` 05 · Settle and hold
  - `344:1717` 05b · Idle blink
- Shared layers:
  - Portrait: "Arm — reach", "Arm — pull", "Arm — release", "Eyes — open" (pupils looking left), "Eyes — blink", "Mouth — focused", plus the original crossed-arm, eyes and mouth layers. They are switched by opacity.
  - Hero: "Tangle mask" (clipped frame holding "Tangle line", a coil through "complicated systems"; full, then half from x 660, then 1px, so it unravels left to right). "Circle mask" (clipped frame holding the Annotation circle; 1px → 612px, so it draws left to right). "Grab line", "Pull line", "Pull marks" (brick), "Release line", and the Signature line (opacity).
- Prototype chain (AFTER_TIMEOUT + SMART_ANIMATE): 01 →0.5s→ 02 (500ms) →0.15s→ 03 (600ms) →0.1s→ 04 (600ms) →0.1s→ 05 (500ms); 05 →5s→ 05b →0.12s→ 05 (blink loop). In 05, MOUSE_ENTER on the portrait replays from 01. Flow start: "Hero animation — The Untangle".
- The live hero `121:1199` is still the static keyframe 05.
- Build spec: column 1 of "Home — Interaction specs" `333:1268` was replaced with the Untangle spec (beats, idle, replay, Rive state machine with stroke-trim animation, Lottie or static fallback, mobile = static plus blink, reduced motion = static, aria-hidden).
- Known rough spots: the arm poses in 02–04 are simple line work, and Figma crossfades the line shapes instead of drawing them (only the masks fake a draw). Polish both in Rive.


### 2.17 Entrance beat and Remotion render (2026-10-13)
- Storyboard addition, at the user's request: he no longer starts on screen. **00 · The entrance**: he rises from below the fold with a soft spring (about 1.2s), arms crossed and smiling, then the tangle starts. His torso continues off the bottom edge.
  - Storyboard v2 `340:1267` now has six panels (00 plus 01–05; the old panels each shifted one slot).
  - New keyframes `348:1429` "Untangle 00 · Below the fold" (portrait +470) and `348:1512` "00b · Arrived" (no tangle yet). Chain: 00 →0.3s→ 00b (GENTLE spring, 1s) →0.1s→ 01 (800ms) → … Hover replay now returns to 00b. The flow start "Hero animation — The Untangle" is at 00.
- **Body extended to the bottom edge:** the shoulder lines run to local y 440, and the hero frames clip at 760. The portrait inner frames are unclipped. Applied to the live hero, the mobile clone (mobile hero height set so the body meets the bottom edge) and all keyframes.
- **Remotion project `motion/`** (Remotion 4.0.535, React 19): `src/Untangle.tsx` (timeline T, portrait, arm poses), `src/geometry.ts` (string point sets that morph point by point), `render.mjs` (uses `/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell`; the option is `outputLocation`, not `output`).
  - Output: `motion/out/untangle.mp4` (1440×760, 30fps, 200 frames ≈ 6.7s, ~0.56MB) and `motion/out/untangle.gif` (half size, 15fps).
  - Fonts come from @fontsource (Newsreader 300/500, Inter 400/500), loaded via delayRender.
- For the site: port the same timeline to an SVG + Motion component in `web/` (or rebuild it in Rive). Play once, replay on hover, reduced motion shows the final frame.

### 2.18 Full animated website in `web/` (2026-10-13)
- The old `web/` home prototype (Lora / Instrument Sans, `fx.tsx`, `data.ts`, `src/assets`) was replaced by the full site: Home, About and the four case studies, built from the Figma pages. See `web/README.md` for routes, the animation list and the known gaps.
- **Pipeline (in `tools/`):** `jsxparse.py` parses `get_design_context` JSX → `classify.py` / `lists.py` pick raster areas and pen SVGs (`lists.json`) → pen SVGs exported with `use_figma` `exportAsync({format:'SVG_STRING'})` into `tools/data/pens1–4.tsv` → raster areas screenshotted with `get_screenshot` (base64; the only route to disk) → `collect_shots.py` maps the screenshots from the session transcript to node ids and writes `web/public/shots/<id>.webp` + `tools/shots.json` → `gen.py` writes `web/src/pages/gen/*.tsx`. The About page context is saved in `tools/data/about_ctx.json`.
- **Scrollable phones:** the full-length INDYCAR "Screen" rects and the VYBE Home / Social screens were exported from temporary unclipped clones (`TEMP EXPORT …`, deleted straight after).
- **Hero:** `web/src/components/Untangle.tsx` is the Remotion timeline ported to a requestAnimationFrame clock (`src/lib/tween.ts` stands in for interpolate / spring / bezier; geometry copied to `src/lib/untangleGeometry.ts`).
- **Fonts:** Newsreader must be the variable font with the optical-size axis (`@fontsource-variable/newsreader/opsz.css`); the static files set wider and broke Figma's line breaks.
- Verified with Playwright (Chromium) at 1440 and 390: no console errors, hero plays and rests on frame 05, nav underline, row frame, page wipe, phone auto-scroll and Work-scroll all work, reduced motion shows everything.

### 2.19 Website review round 1 (2026-10-13)
- Hover groups: a home project row and the next-case-study card now behave the same: pointing at any part draws the brick pen frame on the preview, turns the title and read link brick, and draws (or redraws) the link underline. Hover state is recomputed from the pointer on scroll (`web/src/lib/animate.ts`), so scrolling under a still pointer moves the highlight.
- Next-case-study cards reuse the home-page preview of the project they point to (`HOME_VISUAL` in `tools/gen.py`).
- Testimonials are a carousel (`web/src/components/Testimonials.tsx`): one quote at a time, a brick pen stroke as the timer (about 130 ms a word, at least 6 s), pauses on hover/focus or when off screen, prev/next buttons, no auto-play under reduced motion.
- Resume links now point to `https://drive.google.com/file/u/1/d/1Lm0M9iSy5uVdAX4AAY7Vsvn622sBeMZx/view?usp=drive_link`, in the site and in Figma (14 nav-instance URL actions plus the text links `121:1362`, `290:1215`, `290:1299`). The old "Portfolio" / "Portfolio(Backup)" pages were left alone.
- Final screens on the adidas (`126:1292`) and AI (`158:1343`) case studies are a pinned scroll-through (`ScreenStory.tsx`): the list on the left, one large screen on the right, each screen gets ~80% of a viewport of scroll. Screens were re-exported at 2x from temporary rescaled clones (`shots/<id>-2x.webp`; clones deleted).
- AI outcomes heading changed in Figma (`I158:1580;124:1199`) and the site to "A complete agent workflow in one day, with a person signing off at every stage".
- AI beat "Agents propose, people decide" (`156:1841`): banners, labels and links are redrawn in `AgentBeat.tsx` so every label fits; they slide in one after another.

### 2.20 Website review round 2 (2026-10-13)
- AI hero `156:1290` (Figma): chat bubbles, converging paths and the "chat alone hides the work" note removed; the workspace mockup is scaled to 600 wide with its three labels and the "one workspace" note. Site uses `shots/156-1290-2x.webp`.
- AI section 8: the Timeline is the 7th screen in the scroll-through; the "Spec stage ran 5 hours late" note was deleted in Figma (`165:2975`).
- Caveat notes no longer lose glyphs that ink past their box ("Approve?", "All sign?"): the write-on mask is removed once the stroke finishes (`inked` class).
- Copy changed in Figma and in `TEXT_OVERRIDE` (tools/gen.py): AI outcomes heading "A complete agent workflow, with a person signing off at every stage"; adidas brief quote "…all in under 8 hours?"; adidas intro now says "The brief named adidas: …".
- adidas next-case-study card now points to VYBE (Figma: title `129:1326`, visual replaced by a clone of the home VYBE preview `363:1324`; site: `NEXT_OVERRIDE`). Order: INDYCAR → AI → adidas → VYBE → INDYCAR.

### 2.21 Website review round 3 (2026-10-13)
- "Try the clickable prototype" buttons removed from the adidas (`186:2708`) and AI (`165:2976`) case studies, in Figma and the site (`SKIP` in gen.py; the space below the scroll-through closes up).
- Next-case-study cards get one hover/click area behind the whole card (`.next-hit`), so the gap between title and image counts. Also fixed: `TEXT_OVERRIDE` text now keeps the node's link/animation handling (the adidas → VYBE title had lost its link).
- Fixed nav on every page (`Nav` in kit.tsx): full height and transparent at the top, a 64px solid paper bar with a hairline once scrolled.
- Back-to-top button bottom right on every page (`ScrollTop`): appears after the first screen, rises above the footer links at the very bottom, hand-drawn ring redraws on hover.

### 2.22 Site changes carried back into Figma (2026-10-13)
- **Project Row** (`369:1218`) is now a component set: State=Default / Hover (brick title and read link, pen underline, pen frame around the visual slot), ON_HOVER change-to. Home rows use it. The old note `121:1297` ("hover: a frame draws around the preview") was deleted.
- **Next project card / …** component sets (on 02 — Components): AI agent `370:4723`, Sales dashboard `370:5302`, VYBE `370:5640`, INDYCAR `370:5669`. Instances sit in each case study's Next project section with hover + click-through to the next case study. Next-project visuals on INDYCAR, AI and VYBE replaced by the home previews.
- **Testimonial carousel** `370:1260` (desktop) and `370:1333` (mobile): Slide=1/2/3 with AFTER_TIMEOUT 9.9 s / 6 s / 6 s and Previous/Next. Instances replace the three-column sections `298:2335` and `298:2349` (mobile section now 649 tall).
- **Screen story / Sales dashboard** `371:1350` (5 steps) and **/ AI agent workspace** `372:1455` (7 steps incl. timeline): list left, one 920-wide screen right; click a name to switch. Sections `126:1292` (now 1137 tall) and `158:1343` (1133) hold Step=1 instances. The original screen frames now live inside the variants; their captions became the list.
- AI beat banners widened to 176 px with re-spaced links so every label fits.
- **Nav** `373:1204`: Scroll=Top (paper fill) / Scroll=Scrolled (64 px, hairline). **Back to top** `373:1213` (Default/Hover). On all six desktop page frames the nav and a back-to-top instance are fixed children (`numberOfFixedChildren=2`); back-to-top click scrolls to the first section.
- Spec frame "Website — Interaction specs (from site reviews)" `374:1197` on 03 — Homepage documents all of it.
- Not carried over: the mobile home has no fixed nav or back-to-top yet.

---

## 3. Current state

**Figma (`1PD7zKot98QgHWacUtWDLm`): all pages done.** It matches the website after §2.22.
- **Pages and frames:**
  - Home `121:1198` (desktop) and `123:1245` (mobile).
  - About `290:1198`.
  - Case studies on "05 — Case Studies":
    - Sales Dashboard (adidas brief) `124:1219`.
    - INDYCAR `238:1383`, frozen.
    - AI Agent (Tandem) `156:1268`.
    - VYBE `269:1422`.
- **New components on "02 — Components"** (dashed purple outline):
  - Project Row `369:1218`.
  - Next project card / AI agent `370:4723`, / Sales dashboard `370:5302`, / VYBE `370:5640`, / INDYCAR `370:5669`.
  - Testimonial carousel `370:1260`, plus a mobile version `370:1333`.
  - Screen story / Sales dashboard `371:1350`, and / AI agent workspace `372:1455`.
  - Nav `373:1204` (Scroll=Top / Scrolled).
  - Back to top `373:1213`.
- **Spec frames:**
  - "Website — Interaction specs (from site reviews)" `374:1197` on "03 — Homepage".
  - Earlier: Home `333:1268`, INDYCAR `254:1422`, VYBE `281:1916`.
- **Out of scope until after launch:** page "Case Study: Border Crossing" `0:1` (real ProTrans screens).

**Website (`web/`): built and reviewed in three rounds (§2.18–2.21).**
- **Pages** (hash routes):
  - Home `#/`; `#/work` scrolls to Selected work.
  - About `#/about`.
  - Case studies: `#/work/indycar`, `#/work/ai-agent`, `#/work/adidas`, `#/work/vybe`.
- `npm run build` passes. `npm run lint` passes with two harmless fast-refresh warnings in `kit.tsx`.
- **Playwright checks:** no console errors on any page, at 1440 or 390 px width.
- **Phones get the scaled desktop layout.** The mobile home frame isn't wired up.
- **Not deployed anywhere public.** The only viewable copy is the private artifact above.

**Framer:** not connected yet (§9.1).

**Motion:** `motion/` holds a Remotion render of the hero, "The Untangle". Output is in `motion/out/` (mp4 and gif). The site uses its own port of it, not the video.

---

## 4. Files created or modified (repo)

| Path | What it is |
|---|---|
| `HANDOVER.md` | This file. |
| `web/` | Vite 8 + React 19 + Tailwind 4 + TypeScript site. `README.md` covers routes, the animation table and known gaps. The old home prototype (`data.ts`, `fx.tsx`, `src/assets/`, Lora / Instrument Sans) was **deleted** in `0705df3`. |
| `web/index.html`, `web/src/main.tsx` | Page metadata. Fonts come from @fontsource: **Newsreader Variable (opsz)**, Inter, Caveat, Gochi Hand, Barlow Semi Condensed. |
| `web/src/App.tsx` | Hash router, lazy pages, scaling of the 1440 layout with CSS `zoom`, `--vh-stage` variable, pen-stroke page wipe, `<ScrollTop/>`. |
| `web/src/index.css` | Lyrical tokens, plus every animation and interaction style. Reveal states apply only `:not(.in)` so Figma utility classes win. |
| `web/src/lib/animate.ts` | Scroll reveals via IntersectionObserver: `data-a` = rise / words / write / draw / wipe / line / under / img / count / beat. Also: the `inked` mask removal, phone auto-scroll, and pointer-based hover groups (`data-row`). |
| `web/src/lib/tween.ts`, `untangleGeometry.ts` | interpolate / spring / bezier stand-ins, and the hero geometry (copied from `motion/src/geometry.ts`). |
| `web/src/components/kit.tsx` | Shared constants: `RESUME`, `LINKEDIN`, `EMAIL`, `MAILTO`, `shot()`. Components: `Nav` (fixed, compacts after 40 px), `ScrollTop`, `Frame` (pen frame), `PenUnderline`, `FooterLinks`, `scrollToWork`. |
| `web/src/components/Untangle.tsx` | Hero animation on a rAF clock: once ~300 ms after load, blink every 5–6 s, replay on portrait hover (max once per 4 s). Static on mobile or with reduced motion. |
| `web/src/components/Testimonials.tsx` | Carousel. Dwell is 130 ms × words (min 6 s); pauses on hover, focus or off-screen. |
| `web/src/components/ScreenStory.tsx` | Pinned final-screens scroll-through for adidas (5) and AI (7). |
| `web/src/components/AgentBeat.tsx` | Redrawn "Agents propose, people decide" banners. |
| `web/src/pages/gen/*.tsx` | **Generated. Don't hand-edit.** Edit `tools/gen.py` and re-run it. |
| `web/public/shots/*.webp` | 104 Figma screenshots of raster areas, named by node ID. `-2x` = re-exported at 2×. |
| `tools/gen.py` | Figma JSX → TSX generator. Override tables at the top hold copy changes made after the export: `TEXT_OVERRIDE`, `NEXT_OVERRIDE`, `SRC_OVERRIDE`, `HOME_VISUAL`, `STORY`, `STORY_SRC`, `SKIP`, `BEAT`, `TESTIMONIALS`. |
| `tools/jsxparse.py`, `classify.py`, `lists.py`, `lists.json` | Parser for the Figma JSX, raster/pen classification, and the lists of nodes to export. |
| `tools/data/*_ctx.json` | Figma `get_design_context` exports for home, about, adidas, indycar, ai, vybe. Asset URLs are stripped. **Inputs to `gen.py`.** |
| `tools/data/pens1-4.tsv` | Pen SVGs (`nodeId<TAB><svg>`), exported with `use_figma` `exportAsync({format:'SVG_STRING'})`. |
| `tools/shots.json`, `tools/collect_shots.py` | Screenshot sizes. `collect_shots.py` mapped screenshots from the old session transcript and **won't work in a new session**; new screenshots must be copied in by hand (§6). |
| `motion/` | Remotion 4.0.535 project (§2.17). |

---

## 5. Important decisions and assumptions

**Content integrity (hard rules, unchanged):**
- **No invented content.** Never fabricate metrics, quotes, research or outcomes.
- **Keep claims separate.** Verified deliverables, testing findings and production outcomes are three different things.
- **Adidas:** qualitative testing only.
- **INDYCAR:** 30% and 25% **came from testing**.
- **ProTrans:** the 15% wait-time cut was measured.
- **Border Crossing:** client names are sensitive.
- **Positioning:** never state visa status; no "C2C" in the hero.
- **Testimonials:**
  - Must be verbatim, except Effy Hernandez's.
  - Effy's was reworded with the user's approval, but **Effy must approve the wording before launch**.
  - Never show Effy's contact details.
  - Edgar is shown as "Edgar Escobar", with no "LinkedIn recommendation" label.

**Current copy (latest decisions, all mirrored in Figma and the site):**
- **Home row titles:**
  - INDYCAR: "How an Information Architecture Rebuild and App Redesign Increased INDYCAR Fan Retention by 30%". This is the user's own wording. The "fan retention" framing was flagged, since 30% was a session-duration increase in testing, and the user kept it.
  - AI: "Designing Trust Into an AI Agent Workflow for Enterprise Teams".
  - Adidas: "From Scattered Sales Data to Faster Revenue Decisions".
  - VYBE: "VYBE: Trading 'Journaling' for a 1-Minute Daily Habit".
- **AI outcomes heading:** "A complete agent workflow, with a person signing off at every stage" ("in one day" was removed at the user's request).
- **Adidas:**
  - Brief quote: "…actionable insights, all in under 8 hours?"
  - Intro: "…The brief named adidas: its numbers sat across reports, trends, exports and alerts, so I designed one dashboard that ranks what needs attention first."
  - Tab title: "Sales dashboard challenge" (not "adidas wholesale dashboard"): it's a design challenge, not an adidas engagement.
- **Next case study order:** INDYCAR → AI agent → Sales dashboard → VYBE → INDYCAR. Each card reuses the project's home preview image.
- **Resume link everywhere:** `https://drive.google.com/file/u/1/d/1Lm0M9iSy5uVdAX4AAY7Vsvn622sBeMZx/view?usp=drive_link`. The old link `…1EbvfEBWWpgXVhEKMM…` was replaced in the site and in Figma.
- **Contact:** a mailto with a prefilled subject and body (`MAILTO` in `kit.tsx`). LinkedIn: https://www.linkedin.com/in/karthikanupindi/
- **Removed by the user:**
  - "Try the clickable prototype" buttons on adidas and AI.
  - The AI hero's chat bubbles and the "chat alone hides the work" note.
  - The AI timeline note "the Spec stage ran 5 hours late…".

**Interaction decisions (all specced in Figma `374:1197`):**
- **Hover groups:** a home project row and a next-case-study card are each one hover target, including the gap between text and image.
  - On hover: a brick pen frame draws around the preview (0.75 s), the title and read link turn brick, and the read link's pen underline draws.
  - The hover is recomputed on scroll, so a still pointer follows the page.
- **Nav:** fixed. Transparent 96 px at the top; a 64 px solid paper bar with a hairline after 40 px of scroll. The user asked whether a fixed nav was a good idea; it was recommended and kept. Offered and not taken: hide on scroll down.
- **Back to top:** bottom right, 28 px from the edges. Appears after one screen of scrolling and lifts above the footer links at the bottom.
- **Final screens (adidas, AI):** a list on the left and one large 920 px screen on the right, pinned. Each screen gets about 0.8 of a viewport of scroll; clicking a name jumps to it.
- **Testimonials:** one quote at a time, with a pen-stroke timer, previous/next buttons and pause on hover.
- **Nav links:** the brick hand-drawn underline draws on hover/focus (350 ms) and retracts in 200 ms. No active state; nothing underlined at rest.
- **Reduced motion:** everything shows immediately.

**Build decisions:**
- **Layout:** pages keep the Figma 1440 absolute layout and are scaled with CSS `zoom`. This is faster and exact, but there's no real responsive layout.
- **Generated pages:** they come from the Figma design-context export. Design changes made after that export are applied through `gen.py` override tables, not by re-exporting.
- **Newsreader** must be the variable font with the opsz axis; the static files set wider and break Figma's line breaks.

---

## 6. Figma working notes (how to work in these files)

- **Tools:**
  - `use_figma` runs Plugin API JS, up to 50k characters, and its return value is limited to 20 KB. A failed run rolls back atomically.
  - `get_screenshot` needs `enableBase64Response: true`; the PNG is saved under the session's `tool-results/` folder as `mcp-Figma-blob-*.png`. **This is the only way to get images to disk**: curl to figma.com, including `download_assets` URLs, returns 403.
  - **Screenshots render at 1×.** For 2×, clone the node off-canvas, `rescale(2)`, screenshot the clone, then delete it.
  - **Clipped content:** for clipped content (full-length phone screens), clone with `clipsContent=false`.
  - **Transparent frames** export on Figma's grey canvas; give the clone a paper fill (`#F3EDE1`) first.
  - **Clean up:** name temporary clones `TEMP EXPORT …` and always delete them.
- **Getting a new screenshot into the site:** convert it with Pillow to `web/public/shots/<node-id>.webp`, add `[w,h,mode]` to `tools/shots.json`, re-run `gen.py`.
- **Fonts:**
  - Inter's style is "Semi Bold"; Barlow Semi Condensed's is "SemiBold".
  - Newsreader styles in this file: Regular, Light, Medium, Italic, Light Italic.
  - Load fonts before setting `characters`.
- **Prototype rules:**
  - A NAVIGATE action set inside a component on "02 — Components" can't target frames on another page. Set click-through on the **instance** instead.
  - CHANGE_TO between variants works across pages.
  - AFTER_TIMEOUT is in seconds.
  - SCROLL_TO with `SCROLL_ANIMATE` works for back-to-top.
- **Fixed elements:** move the node to the top-level page frame, set `layoutPositioning='ABSOLUTE'`, keep it among the last children, and set `frame.numberOfFixedChildren`.
- **Nested variants:** changing a nested instance's variant resets its TEXT property, so re-apply Label.
- **SVG frames:** `createNodeFromSvg` frames clip by default.
- **Text lookup:** `findAll` doesn't descend into instance sublayers in clones; `findOne` can match a FRAME named like a text node, so filter by `type==='TEXT'`.
- **Layout:** case study frames are vertical auto-layout, and sections inside them are absolute. After height changes, resize the section.

---

## 7. Hosting / go-live (decided direction: Framer)

- **Direction:** on 2026-10-13 the user asked to work on the site in their Framer project "Portfolio Custom Domain", directly, with a backup taken. Framer is the go-live path.
- **What ports well:** layout, copy and images (`web/public/shots`). Framer builds from its own layers, so `web/` won't import as-is.
- **What needs code components:** the hero (Untangle), ScreenStory, Testimonials, AgentBeat, hover groups and the pen-draw reveals. Port them from `web/src/components` and `web/src/lib/animate.ts`. The `framer-code-components` skill covers the platform rules.
- **Fallback:** deploy `web/` statically to Vercel, Netlify or GitHub Pages with `npm run build` → `web/dist`. The hash router means no server config is needed. Not done; it needs the user's go-ahead and a host.

---

## 8. Commands and tests run

- **Site:** `cd web && npm install`, `npm run build`, `npm run lint` (oxlint), `npx vite preview --port 4173 --strictPort`. All pass as of the last commit.
- **Generator:** `cd tools && python3 gen.py`. It now reads `tools/data/*_ctx.json` and was verified to produce identical pages after the move.
- **Visual checks:** Playwright 1.56.1, installed in the session scratchpad (not the repo), driving `/opt/pw-browsers/chromium-1194/chrome-linux/chrome`.
  - Ad-hoc scripts took full-page and interaction screenshots: hero beats, nav hover, row/next-card hover including scroll-under-pointer, testimonial timing, ScreenStory steps, back-to-top, reduced motion, and a 390 px width.
  - Every page: `errors []`.
- **Preview build:** `npx vite build --base=./ --outDir <scratch>/site`, wrapped in `portfolio.html`, then published with the Artifact tool along with `assets/` and `shots/` (version 4).
- **Remotion:** `cd motion && node render.mjs` writes `out/untangle.mp4` and `.gif`. It uses the `chromium_headless_shell-1194` executable, and the option is `outputLocation`.
- **Node 24+ for Framer:**
  - The container ships `/opt/node22`. Ubuntu apt only has Node 18, and `deb.nodesource.com` is blocked.
  - What worked: the official binary from `https://nodejs.org/download/release/latest/` (`node-v26.11.1-linux-x64.tar.xz`, sha256 checked against `SHASUMS256.txt`), extracted to `/opt/node-latest`, with `node`, `npm`, `npx` and `corepack` symlinked into `/root/.local/bin`, which is first on PATH.
  - This lives outside the repo, so **redo it in a new container**, or add it to the environment setup script.
- **Framer setup:** `npx -y @framer/agent@latest setup` succeeded and installed the skills `framer` and `framer-code-components` into `~/.claude/skills`. They are outside the repo and are lost with the container.
- **Git:** every commit was pushed with `git push -u origin claude/vibrant-turing-me78qp`. Latest commits: website `0705df3`, review rounds `e991e07`, `2d431b8`, `c8ae6ae`, Figma sync `a2983c8`.
- There are no automated tests in the repo.

---

## 9. Errors, failed attempts and unresolved issues

**9.1 Framer connection: blocking.**
- **Network:** `framer.com` and `api.framer.com` are denied by the environment's network policy (proxy CONNECT 403).
  - Fix (user): environment settings → Network access → Allowed domains: add both, keeping "Allow package managers" ticked.
- **Sign-in:** `npx @framer/agent@latest session new <url>` opens a browser auth deeplink (`framer.com/projects/server-api/auth?callback=http://127.0.0.1:<port>/callback…`). The callback goes to the container's localhost, which the user's browser can't reach, so it hangs until the timeout.
  - Workaround built into the CLI: `npx @framer/agent@latest project auth <projectId> <apiKey>`.
  - The user must create a key in Framer (Site Settings → General → API Keys) and store it as the env var or secret `FRAMER_API_KEY`. **Never ask for it in chat.**
- **No Framer MCP or connector:** there's no Framer MCP tool and no Framer entry in the claude.ai connector directory. The `@framer/agent` CLI is the route.
- **Status at handover:** the user was told all of this twice. The key and the allowlist were **not** yet set when the session ended.

**9.2 Open content items.**
- **Effy's testimonial:** she must approve the reworded quote before launch.
- **VYBE prototype video:** still a poster still (`280:1207`). The real video file is needed.
- **INDYCAR screens:** Flags, Road and street, and Championship are short exports; no full-length screens exist. They keep the bottom fade and "continues in the walkthrough ↗".
- **INDYCAR title:** "fan retention" wording flagged; the user kept it.
- **AI agent:** the three planned interactions (show-changes toggle, phase details on hover, embedded prototype) are not built; their annotations were dropped.

**9.3 Site limitations.**
- **Mobile:** desktop layout scaled down; the mobile home frame `123:1245` is not used.
- **Figma prototype vs site:**
  - The Figma prototype can't scroll-drive ScreenStory; you click names instead.
  - The nav doesn't compact in the prototype.
  - Back-to-top is always visible there.
  - The home row image overlay (e.g. `121:1243`) sits above the row, so hovering only the image doesn't trigger the row's Hover variant in the prototype. The site handles it.
- **Mobile Figma home:** no fixed nav or back-to-top.

**9.4 Fixed bugs (don't reintroduce).**
- An unlayered `a{color:inherit}` overrode Tailwind colours; base styles now live in `@layer base`.
- Reveal CSS overrode Figma opacity and transforms; reveal states now apply only `:not(.in)`.
- `clip-path` on hidden Caveat notes stopped the IntersectionObserver from firing; they now use an animated mask (`--wp`), removed after drawing (`inked`) so "?" glyphs aren't clipped.
- Round-cap dots showed at `stroke-dashoffset: 1`; hidden strokes are now set to `opacity: 0`.
- `TEXT_OVERRIDE` used to return a bare `<p>`, dropping the next-card link; it now swaps the text inside the node.
- The vite preview server dies between shells. Restart it with `until curl -s localhost:4173; do (npx vite preview --port 4173 --strictPort &); done`.

**Failed attempts (don't retry):** see also the list in §2.
- `curl` to figma.com assets returns 403, and so does `upload_assets` to mcp.figma.com.
- Moving `motion` 60 px up: the user reverted it ("I like previous one").
- These earlier design approaches were rejected:
  - re-skinning the old home page;
  - an exact Sevora clone;
  - generic dark SaaS screens and v2/v3 Stride;
  - Adidas brush lettering;
  - green left-border callout cards.

---

## 10. Clear next steps

1. **Unblock Framer** (§9.1). If `FRAMER_API_KEY` is set and `api.framer.com` is reachable:
   - install Node 24+ (§8);
   - `npx -y @framer/agent@latest setup`;
   - `npx @framer/agent@latest project auth xEzmmvrjgYHm5r7ClkfC "$FRAMER_API_KEY"`;
   - `session new` with the project link;
   - load the `framer` skill and read its `projects/<id>/index.md` task map.

   If it's still blocked, tell the user in a few lines what's missing and stop.
2. **Inventory the Framer project:** pages, components, CMS collections, styles and fonts. Report back, then plan the migration with the user: replace pages in place, page by page. The user said to work on it directly.
3. **Rebuild in Framer:**
   - Styles first: Lyrical colour tokens, Newsreader / Inter / Caveat text styles.
   - Then pages: Home, About, then the four case studies.
   - Upload images from `web/public/shots/` as assets.
   - Then code components (§7): Untangle hero, ScreenStory, Testimonials, AgentBeat, hover groups, pen-draw reveals.
   - Keep routes equivalent: `/`, `/about`, `/work/<slug>`. Keep the resume, LinkedIn and mailto links from `kit.tsx`.
4. Before publishing, ask the user. Publishing changes the live custom domain.
5. **Still open with the user:**
   - Effy's approval.
   - The VYBE video.
   - Mobile layout (Framer breakpoints are the natural place to solve it).
   - The AI interactions from §9.2.
6. **After launch:** the ProTrans Border Crossing case study (Figma page `0:1`), then the Design System case study.

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
