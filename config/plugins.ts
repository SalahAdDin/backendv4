export default ({ env }) => ({
  "config-sync": {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: false,
      importOnBootstrap: true,
      customTypes: [],
      excludedTypes: ["admin-role"],
      // excludedConfig: ["core-store.plugin_users-permissions_grant"],
    },
  },
  "import-export-entries": {
    enabled: true,
  },
  "preview-button": {
    config: {
      contentTypes: [
        {
          uid: "api::page.page",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "page",
              locale: "{locale}",
              slug: "{slug}",
            },
          },
          published: {
            url: "http://localhost:3000/{locale}/{slug}",
          },
        },
        {
          uid: "api::post.post",
          draft: {
            url: "http://localhost:3000/api/preview",
            query: {
              type: "post",
              slug: "{slug}",
            },
          },
          published: {
            url: "http://localhost:3000/blog/{slug}",
          },
        },
      ],
    },
  },
  seo: {
    enabled: true,
  },
  sitemap: {
    enabled: true,
    config: {
      autoGenerate: true,
      allowedFields: ["id", "uid"],
      excludedTypes: [],
    },
  },
  transformer: {
    enabled: true,
    config: {
      prefix: "/api/",
      responseTransforms: {
        removeAttributesKey: true,
        removeDataKey: true,
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
      url: "https://link-to-hit-on-trigger.com",
      trigger: {
        type: "event",
        events: [
          {
            params: (record) => ({
              id: `${record.id}_${record.title}`,
            }),
            model: "page",
            types: ["delete","publish", "update"],
          },
          {
            params: (record) => ({
              id: `${record.id}_${record.title}`,
            }),
            model: "project",
            types: ["create", "delete","update"],
          },
        ],
      },
    },
  },
});
