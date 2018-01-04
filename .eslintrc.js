module.exports = {
  'extends': ['airbnb-base', 'plugin:react/recommended'],
  'plugins': [
    'import',
    'react'
  ],
  'rules': {
    'linebreak-style': 'off',
    'no-unused-vars': [2, { 'varsIgnorePattern': 'h' }],
    'react/no-unknown-property': 'off',
    'react/prop-types': 'off'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    "browser": true,
  },
  'settings' :{
    "react": {
      "pragma": "h",
    },
  }
};