const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const setting = require("./config/setting");
module.exports = {
  lintOnSave: process.env.NODE_ENV === "development",
  devServer: {
    port: process.env.port || "2025",
    open: true,
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = setting.title || "G-UI";
      return args;
    });
  }
};
