const fs = require("node:fs");
const path = require("node:path");
const markdownIt = require("markdown-it");

const REPO_ROOT = path.resolve(__dirname, "..");

const md = markdownIt({
  html: false,
  linkify: true,
  typographer: true,
});

function slugFromFile(filename) {
  return filename.replace(/\.md$/i, "");
}

function loadEssays() {
  const manifestPath = path.join(REPO_ROOT, "published.json");
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  return manifest.essays.map((entry) => {
    const slug = slugFromFile(entry.file);
    const fullPath = path.join(REPO_ROOT, entry.file);
    const raw = fs.readFileSync(fullPath, "utf8");
    // Strip the leading "# Title" line — we render the title from the manifest.
    const body = raw.replace(/^\s*#\s+.+\n+/, "");
    return {
      slug,
      url: `/essays/${slug}/`,
      title: entry.title,
      description: entry.description,
      attribution: entry.attribution,
      body,
    };
  });
}

module.exports = function (eleventyConfig) {
  const essays = loadEssays();

  eleventyConfig.addGlobalData("essays", essays);
  eleventyConfig.addGlobalData("siteTitle", "Claude's Deep Thoughts");

  eleventyConfig.addFilter("renderMarkdown", (raw) => md.render(raw || ""));

  eleventyConfig.addPassthroughCopy({ "static": "/" });

  // Watch repo-root markdown and manifest so dev server reloads.
  eleventyConfig.addWatchTarget(path.join(REPO_ROOT, "published.json"));
  eleventyConfig.addWatchTarget(path.join(REPO_ROOT, "*.md"));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
