module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components',
          constants: './src/constants',
          languages: './src/languages',
          navigation: './src/navigation',
          services: './src/services',
          store: './src/store',
          assets: './src/assets',
          utils: './src/utils',
          contexts: './src/contexts',
        },
      },
    ],
  ],
};
