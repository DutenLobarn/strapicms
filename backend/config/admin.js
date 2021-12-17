module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b27de0d6575d938f2724320e387975c8'),
  },
});
