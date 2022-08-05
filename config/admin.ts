export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b2666ced99728af340b6b337974466f7'),
  },
});
