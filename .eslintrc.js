module.exports = {
  extends: [
    'ryansobol/browser',
    'ryansobol/es6',
    'ryansobol/node',
    'ryansobol/react',
  ],

  parserOptions: {
    sourceType: 'module',
  },

  rules: {
    'comma-dangle': ['error', 'ignore'],
  }
};
