# Amir Farid Academic Website

First version of Amir Farid's personal academic website. The site is static, fast, and organized around research, projects, publications, learning notes, technical notes, blog posts, CV, and about pages.

## Tech Stack

- Astro
- TypeScript
- Markdown and MDX
- Astro content collections
- Plain CSS

## Install

```bash
npm install
```

On Windows PowerShell systems that block `npm.ps1`, use `npm.cmd` instead.

## Run Dev Server

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Add a New Learning Post

Create a new `.mdx` file from the template:

```bash
npm run new:learning -- threat-model-basics "Threat Model Basics"
```

This creates an entry in `src/content/learning/` with frontmatter:

```yaml
title:
summary:
date:
updated:
level:
prerequisites:
tags:
interactive:
```

Learning posts are for conceptual explanations and can later embed interactive MDX components.

## Add a New Technical Note

Create a new `.md` file from the template:

```bash
npm run new:technical -- debugging-example "Debugging Example"
```

This creates an entry in `src/content/technical/` with frontmatter:

```yaml
title:
summary:
date:
updated:
environment:
tools:
tags:
```

Use technical notes for commands, debugging records, implementation details, and reproducible fixes.

## Add a New Blog Post

Create a new `.md` file from the template:

```bash
npm run new:blog -- research-reflection "Research Reflection"
```

This creates an entry in `src/content/blog/` with frontmatter:

```yaml
title:
summary:
date:
tags:
```

Blog posts are for professional reflections on research, learning, PhD life, books, and academic growth.

## Add Projects and Publications

Use the project and publication templates:

```bash
npm run new:project -- project-slug "Project Title"
npm run new:publication -- publication-slug "Publication Title"
```

Publication details, CV claims, research claims, venues, author lists, DOI links, and statuses should only be changed after confirmation.

## Build Metadata

`npm run build` generates `public/version.json` before running Astro. The file contains an ISO build time and a commit SHA when Git metadata or CI-provided commit variables are available.

## Hidden Learning and Technical Sections

Learning Notes and Technical Notes are currently kept in the codebase but hidden from the public navigation and homepage. Their list pages show temporary coming-soon text, and individual post pages are not generated while the flags are off.

To re-enable them later, update `src/config/site.ts`:

```ts
featureFlags.learning = true;
featureFlags.technical = true;
```
