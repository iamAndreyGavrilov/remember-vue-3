const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  base: "/remember-vue-3",
  transpileDependencies: true,
});

module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
