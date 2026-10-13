# Shared study interface

All five HTML pages load the shared `study-ui.css` and `study-ui.js` after their base course styles and scripts. Scoped learning and finance styles extend the shared layer. This shared layer owns the sidebar, course switcher, four study tabs, search placement, overview, typography, spacing and responsive layout. Lucide icons are vendored locally, with their license beside the bundle.

Course diagrams and teaching content remain in the original HTML or course-specific content files. Strategic Change and Positive Leadership retain their quiz engines; their sections are shown one at a time without replacing quiz nodes. The shared interface provides chapter navigation, search, progress and recall cards from their existing question banks. Environmental Management retains its content renderer, calculator, recall and exam persistence; `StudyUI.overview()` supplies its shared overview.

Progress for the two original courses uses separate `ieseg-<course>-study-v1` localStorage keys. Environmental Management retains its existing `ieseg-environmental-v1` key and saved answers. Search and chapter links work directly under `file://`; no server is needed.

Sustainable Finance builds its chapter sections before the shared renderer starts. It uses the shared static-course navigation, search, recall and progress (`ieseg-finance-study-v1`); its own script owns the memo filter, saved quiz and three calculators. Content section IDs also serve as recall IDs, so additions do not reorder saved knowledge records.

Run regression checks with Node and Playwright available:

```sh
node tests/study-ui.test.cjs
```

The test uses installed Chrome, compares computed shared styles, checks five viewport widths and exercises navigation, search, recall, saved progress, both quizzes, the exam and the carbon calculator. Screenshots are written to `/tmp/study-*.png`.
