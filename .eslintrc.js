module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-native'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Reglas de estilo
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'error',
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'react-native/no-color-literals': 'off',
    'react-native/no-inline-styles': 'off',
    'react-native/no-raw-text': 'off',
    'react-native/sort-styles': 'off',
    'react-native/no-single-element-style-arrays': 'off',
  },
};
