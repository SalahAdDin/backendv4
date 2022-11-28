import path from "path";

export default ({ env }) => ({
  /* connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "strapi"),
      password: env("DATABASE_PASSWORD", "strapi"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  }, */
  connection: {
    client: "sqlite",
    connection: {
      filename: path.join(
        __dirname,
        "..",
        "..",
        env("DATABASE_FILENAME", path.join(".tmp", "data.db"))
      ),
    },
    useNullAsDefault: true,
  },
});
