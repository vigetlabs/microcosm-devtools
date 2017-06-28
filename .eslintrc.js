var isIntegration = !!process.env.CI || process.env.NODE_ENV === 'production'

module.exports = {
  globals: {
    Promise: true,
    jest: true,
    expect: true,
    chrome: true
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  extends: ['eslint:recommended'],
  plugins: ['import', 'react'],
  rules: {
    semi: [1, 'never'],
    'comma-dangle': [2, 'never'],
    'no-console': 'warn',
    'no-debugger': isIntegration ? 'error' : 'warn',
    'no-unused-vars': [2, { args: 'none' }],
    'react/jsx-equals-spacing': ['warn', 'never'],
    'react/jsx-no-duplicate-props': ['warn', { ignoreCase: true }],
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': [
      'warn',
      {
        allowAllCaps: true,
        ignore: []
      }
    ],
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/no-danger-with-children': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-direct-mutation-state': 'warn',
    'react/no-is-mounted': 'warn',
    'react/react-in-jsx-scope': 'error',
    'react/require-render-return': 'warn',
    'react/style-prop-object': 'warn'
  }
}
