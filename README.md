# IESEG 2.0

Personal revision hub for Strategic Change Management, Positive Leadership and Environmental Management.

Open `index.html` directly in a browser. No build step or local server is needed.

## Interface

The courses share the sidebar, navigation, search and typography defined in `assets/study-ui.js` and `assets/study-ui.css`. Course content and interactive exercises remain in their dedicated files.

Progress and practice answers are stored locally in the browser. They are not uploaded to GitHub and do not automatically sync between devices or between the local and published site.

## Publication

GitHub Pages serves the root of the `main` branch. The `.nojekyll` file enables direct static-file publication.

Original school documents in `sources/` are excluded from this public repository. The local site retains access to them; the published interface labels these references as local documents rather than exposing broken download links.

## Checks

With Node, Playwright and Chrome installed:

```sh
node tests/study-ui.test.cjs
```

Generated artwork provenance is documented in `assets/generation.md`. The locally bundled Lucide library retains its license in `assets/lucide-LICENSE`.
