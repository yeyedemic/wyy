module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  rules: {
    'object-curly-newline': 'off',
    'no-console': process.env.NODE_ENV === 'development' ? 'off' : 'error',
    'no-alert': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'no-shadow': 'off',
    'import/order': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-nested-ternary': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
};
