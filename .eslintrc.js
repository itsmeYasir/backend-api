module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off', // Turn off the no-console rule for this example
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['./src'],
      },
    },
  },
};
