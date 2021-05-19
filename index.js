module.exports = {
  extends: [
    'plugin:react/recommended',
    'airbnb-base',
    'airbnb/rules/react'
  ],
  plugins: [
    'react-hooks'
  ],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never'
    }],
    'react/jsx-props-no-spreading': 'off',
    'import/no-mutable-exports': 'off',
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'unknown', 'index'],
      'newlines-between': 'always-and-inside-groups'
    }],
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-continue': 'off',
    'consistent-return': 'off',
    'array-callback-return': 'off',
    'no-restricted-globals': 'off',
    'no-shadow': 'off',
    'default-case': 'off',
    'global-require': 'off',
    'no-return-assign': 'off',
    'no-unused-expressions': 'off',
    'no-await-in-loop': 'off',
    'comma-dangle': ['error', 'never'],
    'nonblock-statement-body-position': ['error', 'below'],
    curly: ['error', 'multi', 'consistent'],
    'arrow-parens': ['error', 'as-needed'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'prefer-destructuring': ['error', {object: true, array: false}],
    'max-len': ['error', {code: 120}],
    'no-restricted-syntax': ['error', {
      selector: 'LabeledStatement',
      message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.'
    }, {
      selector: 'WithStatement',
      message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.'
    }
    ],
    'object-curly-newline': ['error', {
      ImportDeclaration: { multiline: true, minProperties: 6 }
    }],
    'no-underscore-dangle': ['error', { allow: ['__isNew__', '__data', '_json'] }],
    'import/no-dynamic-require': 'off',
    'no-warning-comments': ['error', { terms: ['stackoverflow.com'], location: 'anywhere' }]
  }
};
