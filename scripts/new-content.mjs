import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const collections = {
  learning: {
    template: "templates/content/learning.mdx",
    directory: "src/content/learning",
    extension: "mdx",
  },
  technical: {
    template: "templates/content/technical.md",
    directory: "src/content/technical",
    extension: "md",
  },
  blog: {
    template: "templates/content/blog.md",
    directory: "src/content/blog",
    extension: "md",
  },
  news: {
    template: "templates/content/news.md",
    directory: "src/content/news",
    extension: "md",
  },
  project: {
    template: "templates/content/project.md",
    directory: "src/content/projects",
    extension: "md",
  },
  publication: {
    template: "templates/content/publication.md",
    directory: "src/content/publications",
    extension: "md",
  },
};

const [, , type, rawSlug, ...titleParts] = process.argv;
const config = collections[type];

if (!config || !rawSlug) {
  console.error("Usage: npm run new:<type> -- <slug> [Title]");
  console.error("Types: learning, technical, blog, news, project, publication");
  process.exit(1);
}

const slug = rawSlug
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

if (!slug) {
  console.error("Slug must contain at least one letter or number.");
  process.exit(1);
}

const title = titleParts.join(" ").trim() || toTitle(slug);
const today = new Date().toISOString().slice(0, 10);
const targetDirectory = path.resolve(config.directory);
const targetPath = path.join(targetDirectory, `${slug}.${config.extension}`);

if (existsSync(targetPath)) {
  console.error(`Refusing to overwrite existing file: ${targetPath}`);
  process.exit(1);
}

const template = readFileSync(path.resolve(config.template), "utf8");
const content = template
  .replaceAll("__TITLE__", title)
  .replaceAll("__DATE__", today)
  .replaceAll("__SLUG__", slug);

mkdirSync(targetDirectory, { recursive: true });
writeFileSync(targetPath, content, "utf8");
console.log(`Created ${path.relative(process.cwd(), targetPath)}`);

function toTitle(value) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
