import cronTasks from "../../cron-tasks";

export default ({ env }) => ({
  url: env("HEROKU_URL"),
  app: {
    keys: env.array("APP_KEYS"),
  },
  cron: {
    enabled: env.bool("CRON_ENABLED", false),
    tasks: cronTasks,
  },
});
