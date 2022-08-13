export default ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "b2666ced99728af340b6b337974466f7"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  watchIgnoreFiles: ["**/config/sync/**"],
});
