# geoverse.dev

Static, dependency-free geoverse.dev project hub. Plain HTML, CSS and JavaScript.

## Publish on GitHub Pages

1. Copy **the contents** of this folder into the root of the `geoverse-dev/geoverse` repository.
2. Commit and push to the publishing branch (typically `main`).
3. In GitHub → Settings → Pages, choose **Deploy from a branch**, `main`, `/ (root)` (unless your repository already has a working deployment workflow).
4. Configure `geoverse.dev` as the custom domain in Pages and ensure the DNS records point to GitHub Pages. The included `CNAME` file is for that domain.
5. Enable **Enforce HTTPS** once DNS/SSL is ready.

If your repository already has Pages configured, preserve its existing deployment settings and just replace the site files.

## Editing

- `index.html`: project cards, copy and GitHub URLs.
- `styles.css`: colors, layout and responsiveness.
- `script.js`: category filters.
- `assets/*.webp`: graphics from the approved visual mockup, upscaled and sharpened to improve presentation. Since the source is a raster mockup, this does not recreate detail absent from the original; original high-resolution screenshots can replace these later. Replace with high-resolution original assets/screenshots when available.
- `assets/favicon.svg`: simple vector favicon inspired by the logo (not a source-vector reproduction).

Only public repositories are included. The cards use explicitly named repository URLs; they do not dynamically fetch GitHub data. The Portolan SDK card links to Java and Python. The mockup's illustration labels are artwork, not live benchmark measurements or software screenshots.

## Local preview

Open `index.html` in your browser or run `python3 -m http.server 8000` from this folder.

No build step, package manager or dependencies required.

## v2 adjustments

- Removed About links from header, hero and footer; the About geoverse.dev informational panel remains on the homepage.
- Increased layout dimensions, typography, card images and spacing for a comfortable default 100% browser zoom.
- Reprocessed the supplied card artwork at higher output resolution with gentle sharpening.
