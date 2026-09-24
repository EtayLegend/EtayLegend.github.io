import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function(eleventyConfig) {
  
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  
  eleventyConfig.addPassthroughCopy(".nojekyll");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("css");

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

  const isLocal = process.env.IS_LOCAL === "true";
  const productionPrefix = "/EtayLegend.github.io/"; 

  return {
    dir: {
      input: ".",
      output: "_site"
    },

    pathPrefix: isLocal ? "/" : productionPrefix
  };

};