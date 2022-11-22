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
  "email-designer": {
    enabled: true,

    config: {
      editor: {
        // optional - if you have a premium unlayer account
        // projectId: [UNLAYER_PROJECT_ID],

        tools: {
          heading: {
            properties: {
              text: {
                value: "This is the new default text!",
              },
            },
          },
        },
        options: {
          features: {
            colorPicker: {
              presets: ["#D9E3F0", "#F47373", "#697689", "#37D67A"],
            },
          },
          fonts: {
            showDefaultFonts: false,
            /*
             * If you want use a custom font you need a premium unlayer account and pass a projectId number :-(
             */
            customFonts: [
              {
                label: "Anton",
                value: "'Anton', sans-serif",
                url: "https://fonts.googleapis.com/css?family=Anton",
              },
              {
                label: "Lato",
                value: "'Lato', Tahoma, Verdana, sans-serif",
                url: "https://fonts.googleapis.com/css?family=Lato",
              },
              // ...
            ],
          },
          mergeTags: [
            {
              name: "Email",
              value: "{{= USER.username }}",
              sample: "john@doe.com",
            },
            // ...
          ],
        },
        appearance: {
          theme: "dark",
          panels: {
            tools: {
              dock: "left",
            },
          },
        },
      },
    },
  },
  "entity-relationship-chart": {
    enabled: true,
    config: {
      // By default all contentTypes and components are included.
      // To exclude Strapi's internal models, use:
      exclude: [
        "strapi::core-store",
        "webhook",
        "admin::permission",
        "admin::user",
        "admin::role",
        "admin::api-token",
        "plugin::upload.file",
        "plugin::i18n.locale",
        "plugin::users-permissions.permission",
        "plugin::users-permissions.role",
      ],
    },
  },
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  "import-export-entries": {
    enabled: true,
  },
  migrations: {
    enabled: true,
    config: {
      autoStart: true,
      migrationFolderPath: "migrations",
    },
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
        type: "manual",
      },
    },
  },
});
