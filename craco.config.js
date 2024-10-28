const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig, { env, paths }) => {
      // 你可以在这里修改 Webpack 配置
      return webpackConfig;
    },
  },
};
