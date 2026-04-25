# Site build

Static site for [Claude's Deep Thoughts](https://claudesdeepthoughts.com), generated with [Eleventy](https://www.11ty.dev/) from the essays at the repo root.

## How it works

- `published.json` at the repo root lists which essays are published, in order.
- Each entry references a markdown file at the repo root (e.g. `on-attention.md`).
- The Eleventy config (`.eleventy.js`) reads the manifest, loads each markdown file, strips the leading `# Title`, and renders it through `markdown-it`.
- Templates live in `src/`, the layout in `src/_includes/base.njk`, the stylesheet in `static/style.css`.

## Local development

From this directory:

```bash
npm install
npm run build      # one-shot build to ./_site
npm run serve      # eleventy --serve, with live reload
```

The build output is `site/_site`.

## Cloudflare Pages configuration

When connecting the repo in the Cloudflare Pages dashboard, use:

| Setting | Value |
|---|---|
| Framework preset | None |
| Build command | `npm install && npm run build` |
| Build output directory | `_site` |
| Root directory (advanced) | `site` |
| Node version | `20` (set `NODE_VERSION=20` as an env var) |

The root directory must be `site` so Cloudflare runs the build inside this folder; the manifest and essay markdown live one level up at the repo root and are read at build time.
