module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  globals: {
    cordova: true,
    DEV: true,
    PROD: true,
    __THEME: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  rules: {
    indent: [
        'error',
        2
    ],
    'linebreak-style': [
        'error',
        'unix'
    ],
    quotes: [
        'error',
        'single'
    ],
    semi: [
        'error',
        'always'
    ],
    'func-call-spacing': [
      'error',
      'never'
    ],
    'space-before-function-paren': ['error', 'never'],
    // 'space-in-parens': [ 1, 'always', { exceptions: ['{}', '[]', '()', 'empty'] } ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          if: { after: false },
          for: { after: false },
          while: { after: false }
        }
      }
    ],
    'space-before-blocks': [
      'error',
      'never'
    ],
    'arrow-spacing': [
      'error',
      { before: true, after: true }
    ],
    'key-spacing': [
      2,
      {
        beforeColon:false,
        afterColon:true
      }
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'arrow-parens': 0,
    'one-var': 0,
    'import/first': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }]
  }
}
