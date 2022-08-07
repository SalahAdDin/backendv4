export default {
  // Generate the sitemap every 12 hours
  "* * * * 7": ({ strapi }) => {
    strapi.plugin("sitemap").service("core").createSitemap();
  },
};
