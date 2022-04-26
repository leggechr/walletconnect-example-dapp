module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        entry: {
          content: "./src/chrome/content.ts",
          main: [
            env === "development" && require.resolve("react-dev-utils/webpackHotDevClient"),
            paths.appIndexJs,
          ].filter(Boolean),
        },
        optimization: {
          ...webpackConfig.optimization,
          runtimeChunk: false,
        },
        output: {
          ...webpackConfig.output,
          filename: "static/js/[name].js",
        },
      };
    },
  },
};
