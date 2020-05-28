module.exports = {
  extends: ['react-native-shinpei'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'import/extensions': [
      2,
      {
        js: 'never',
        json: 'always',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/prop-types': 0,
    'react/jsx-wrap-multilines': 0,
    'no-param-reassign': [
      2,
      {
        ignorePropertyModificationsFor: ['^draft'],
      },
    ],
    'react/jsx-one-expression-per-line': 0,
    'no-unused-expressions': 0,
    'one-var': 0,
    'no-underscore-dangle': 0,
    'no-plusplus': 0,
    'react-hooks/exhaustive-deps': 1,
    'import/prefer-default-export': 0,
    'no-restricted-syntax': 0,
    'no-continue': 0,
    'prefer-promise-reject-errors': 0,
    'react/no-this-in-sfc': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.android.js',
          '.android.jsx',
          '.android.ts',
          '.android.tsx',
          '.ios.js',
          '.ios.jsx',
          '.ios.ts',
          '.ios.tsx',
          '.web.js',
          '.web.jsx',
          '.web.ts',
          '.web.tsx',
          '.d.ts',
          '.d',
        ],
      },
    },
    'babel-plugin-root-import': [
      {
        rootPathSuffix: './src/api',
        rootPathPrefix: '@api/',
      },
      {
        rootPathSuffix: './src/components',
        rootPathPrefix: '@Components/',
      },
      {
        rootPathSuffix: './src/utils',
        rootPathPrefix: '@utils/',
      },
      {
        rootPathSuffix: './src/constants',
        rootPathPrefix: '@constants/',
      },
      {
        rootPathSuffix: './src/pages',
        rootPathPrefix: '@pages/',
      },
      {
        rootPathSuffix: './src/system',
        rootPathPrefix: '@system/',
      },
      {
        rootPathSuffix: './assets',
        rootPathPrefix: '@assets/',
      },
      {
        rootPathSuffix: '.',
        rootPathPrefix: '/',
      },
    ],
  },
};
