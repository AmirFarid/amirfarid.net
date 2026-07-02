import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";

const commit =
  process.env.GITHUB_SHA ||
  process.env.VERCEL_GIT_COMMIT_SHA ||
  process.env.CF_PAGES_COMMIT_SHA ||
  readGitSha();

const metadata = {
  buildTime: new Date().toISOString(),
  commitSha: commit,
};

const outputPath = path.resolve("public/version.json");
mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(outputPath, JSON.stringify(metadata, null, 2) + "\n", "utf8");
console.log(`Generated ${path.relative(process.cwd(), outputPath)}`);

function readGitSha() {
  try {
    return execFileSync("git", ["rev-parse", "HEAD"], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "unknown";
  }
}
