module.exports = function(eleventyConfig) {
  // Copy `css/` directory to `docs/css` because eleventy doesn't process CSS files
  eleventyConfig.addPassthroughCopy("css");

  return  {
    htmlTemplateEngine: "njk",
    templateFormats: [
      "jpeg",
      "jpg",
      "png",
      "html",
      "njk",
      "xml"
    ],
    dir: {
      input: "src",
      includes: "templates",
      output: "dist"
    }
  }
};
