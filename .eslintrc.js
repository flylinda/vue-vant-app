module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'camelcase': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    "no-var": 0,
    "operator-linebreak": ["error", "before"]
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
