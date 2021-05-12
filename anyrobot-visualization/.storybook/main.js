module.exports = {
  stories: ["../src/stories/*.stories.js"],
  // webpackFinal: async (config) => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     use: [
  //       {
  //         loader: require.resolve("babel-loader"),
  //         options: {
  //           presets: [require.resolve("babel-preset-react-app")],
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
};
