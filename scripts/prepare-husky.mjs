import { execFileSync } from "node:child_process";

try {
  execFileSync("git", ["rev-parse", "--git-dir"], { stdio: "ignore" });
} catch {
  console.log("Skipping Husky setup because this workspace is not an initialized Git repository yet.");
  process.exit(0);
}

try {
  execFileSync("husky", { stdio: "inherit", shell: true });
} catch (error) {
  console.warn("Husky setup skipped:", error instanceof Error ? error.message : error);
}
