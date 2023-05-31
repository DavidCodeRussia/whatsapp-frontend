const path = require('path');

module.exports = {
  style: {
    sass: {
      loaderOptions: {
        additionalData: `@import "src/scss/variables.scss";`,
      },
    },
  },
  webpack: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@redux': path.resolve(__dirname, 'src', 'reduxToolkit'),
      '@api': path.resolve(__dirname, 'src', 'API'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
    },
  },
};

export {};
