const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Add readableDate filter
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj).toFormat("LLLL d, yyyy");
  });

  // Pass through CSS
  eleventyConfig.addPassthroughCopy("styles.css");

  // Register the "posts" collection
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
