module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b0f459037685c08f98d202e34ffbce86'),
  },
});
