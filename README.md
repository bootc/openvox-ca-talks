# openvox-ca talks

Slide decks for conference talks about [openvox-ca](https://github.com/voxpupuli/openvox-ca), a drop-in replacement for the Puppet/OpenVox certificate authority, written in Go.

## Layout

Each talk lives under `talks/<year>-<event>/` as a self-contained [Slidev](https://sli.dev) project with its own `package.json` and lockfile. Talks don't share dependencies, so an old talk keeps building with the Slidev version and theme it was written against, and a new talk can upgrade freely.

```text
talks/
└── 2026-cfgmgmtcamp/
    ├── slides.md        deck-wide options, and the order of the pages
    ├── pages/           the slides, split into a few files by section
    ├── theme/           the OpenVox Slidev theme (layouts, styles, logos)
    ├── package.json
    ├── pnpm-lock.yaml
    ├── README.md        title, abstract, status
    └── assets/          images and diagrams
```

Slidev reads `slides.md` as the entry point. Rather than holding every slide in one long file, it imports each file in `pages/` in turn using Slidev's [`src:` frontmatter](https://sli.dev/guide/syntax#importing-slides). Each page file holds several slides for one part of the talk. To add a section, create a new file in `pages/` and add a matching `src:` entry to `slides.md`.

The `<year>-<event>` slug keeps talks in chronological order and unambiguous when the same event comes round again.

## Theme

Talks use a local Slidev theme in `theme/`, selected with `theme: ./theme` in `slides.md`. It uses the [OpenVox logos](https://github.com/voxpupuli/logos/tree/master/images/OpenVox) and colours: near-black `#1d1d1b`, white, and the orange `#eb8521` from the OpenVox sticker. The orange is too light for text on white, so the theme uses it only for accents.

| Layout | Use |
| ------ | --- |
| `cover` | Title slide (always the first slide): dark, with the OpenVox mark on the right |
| `section` | Section dividers: orange, with a large faint mark behind the title |
| `default` | Content slides: white, with a small mark in the bottom-right corner |
| `end` | Closing slide: dark, with the OpenVox logo and the logo attribution |

Other built-in Slidev layouts (`two-cols`, `image-right` and so on) still work and pick up the theme's colours and typography.

The theme lives inside each talk rather than being shared, so changing it for a new talk can't alter an old one. A new talk gets its own copy along with the rest of the directory.

## Running a talk locally

Talks use [pnpm](https://pnpm.io). Each `package.json` pins the pnpm version in its `packageManager` field; recent pnpm (or Corepack) switches to that version automatically.

```sh
cd talks/2026-cfgmgmtcamp
pnpm install
pnpm run dev
```

The dev server opens the deck at <http://localhost:3030> and reloads as you edit `slides.md` or anything in `pages/`.

## Exporting to PDF

```sh
pnpm run export
```

This runs `slidev export` and writes `slides-export.pdf` in the talk's directory. Export uses headless Chromium via `playwright-chromium`, which pnpm downloads during install.

PDFs aren't committed. On every push to `main` that changes anything in a talk's directory (other than its `README.md`), the [Build slides](.github/workflows/build-slides.yml) workflow exports that talk and attaches the PDF to the workflow run as an artifact. The workflow can also be run by hand to rebuild every talk.

## Starting a new talk

1. Copy an existing talk directory to `talks/<year>-<event>/`.
2. Update `name` in `package.json`, rewrite `slides.md`, `pages/` and `README.md`, and empty `assets/`.
3. Run `pnpm install` to refresh the lockfile (and `pnpm update --latest` if you want a newer Slidev).
4. Add the talk to the table below.

## Talks

| Date | Event | Title | Slides | Recording |
| ---- | ----- | ----- | ------ | --------- |
| 2026 (TBC) | CfgMgmtCamp 2026 | openvox-ca: A Drop-In Puppet CA, Rewritten in Go | [talks/2026-cfgmgmtcamp](talks/2026-cfgmgmtcamp/) | — |

## Licence

Slide content is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](LICENSE). You're free to share and adapt it, provided you credit the authors.

The OpenVox logos in `talks/*/theme/assets/` are © 2025 Romain Tartière (concept) and André Ringel (final touches), and are licensed under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), not CC BY 4.0. They're included unmodified, and the theme's closing slide carries the required attribution. If you modify the logos, your modified versions must also be shared under CC BY-SA 4.0. See `theme/assets/README.md` in each talk for the source and file mapping.

The Slidev theme code in `talks/*/theme/` (layouts, styles and configuration, but not the logos) is licensed under the [MIT licence](talks/2026-cfgmgmtcamp/theme/LICENSE), as CC licences aren't designed for code.

Other code snippets or demos added to this repository later may carry their own licence. Where they do, the licence is stated inline, next to the code or in the file itself.
