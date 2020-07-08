module.exports = api => {
  api.cache(true);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          paths: [
            {
              rootPathSuffix: './src/api',
              rootPathPrefix: '@api/',
            },
            {
              rootPathSuffix: './src/components',
              rootPathPrefix: '@components/',
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
            {
              rootPathSuffix: './@types',
              rootPathPrefix: '@types',
            },
          ],
        },
      ],
    ],
  };
};
