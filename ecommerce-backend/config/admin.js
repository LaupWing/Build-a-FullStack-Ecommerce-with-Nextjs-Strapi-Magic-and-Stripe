module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '02320887f99fa4f8f3f8b7286e0454d1'),
  },
});
