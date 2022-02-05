module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f8bec5b974eef5cde2b645dd1b8920f3'),
  },
});
