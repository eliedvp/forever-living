module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'react-app',
    'react-app/jest'
  ],
  globals: {
    // ApexCharts library
    ApexCharts: 'readonly',

    // SweetAlert2
    Swal: 'readonly',

    // Bootstrap
    bootstrap: 'readonly',

    // jQuery (if used)
    $: 'readonly',
    jQuery: 'readonly',

    // Chart.js
    Chart: 'readonly',

    // Global browser APIs that might be flagged
    confirm: 'readonly',
    alert: 'readonly',
    prompt: 'readonly',
  },
  rules: {
    // Allow console statements in development and warn in production
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    // Allow unused variables starting with underscore
    'no-unused-vars': ['warn', {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      ignoreRestSiblings: true
    }],

    // Allow specific global usage
    'no-restricted-globals': ['error', 'event', 'fdescribe'],

    // Allow reassigning function parameters
    'no-param-reassign': ['warn', { props: false }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
