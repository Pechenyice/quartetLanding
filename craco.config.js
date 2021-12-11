const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, '/'),
      '@Pages': path.resolve(__dirname, 'pages'),
      '@Components': path.resolve(__dirname, 'components'),
      '@Events': path.resolve(__dirname, 'events'),
      '@Members': path.resolve(__dirname, 'members'),
      '@Styles': path.resolve(__dirname, 'styles'),
      '@Types': path.resolve(__dirname, 'types'),
    },
  },
};
