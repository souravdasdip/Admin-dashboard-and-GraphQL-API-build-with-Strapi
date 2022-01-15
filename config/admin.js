module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '42c39a685989124e1f4fbaf8cec5a4c4'),
  },
});
