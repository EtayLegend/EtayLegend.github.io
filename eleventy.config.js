module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/images");

  eleventyConfig.addCollection("projectsByFileName", function(collectionApi) {
    return collectionApi.getFilteredByTag("project").sort((a, b) => {
      return b.inputPath.localeCompare(a.inputPath, undefined, { numeric: true, sensitivity: 'base' });
    });
  });

  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("posts/*.md").sort((a, b) => {
      const dateDiff = b.date - a.date;
      
      if (dateDiff !== 0) return dateDiff; 
      
      return b.inputPath.localeCompare(a.inputPath);
    });
  });

  return {
    dir: {
      input: ".",
      output: "_site"
    },

    pathPrefix: "/your-repository-name/" 
  };

};