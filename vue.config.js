const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
const args = process.argv.slice(2);
if (process.env.NODE_ENV == "production" && args.includes("--all")) {
  const fs = require("fs");
  const path = require("path");
  const getEntries = dir => {
    const absPath = path.resolve(dir);
    const files = fs.readdirSync(absPath);
    const entries = {};
    files.forEach(item => {
      let p = path.resolve(absPath, item);
      if (fs.statSync(p).isDirectory()) {
        p = path.resolve(p, "index.js");
        entries[item.split(".")[0]] = p;
      }
    });
    return entries;
  };
  module.exports = {
    outputDir: "dist", // 打包出口
    configureWebpack: {
      entry: {
        // 配置多入口
        ...getEntries("./src/packages")
      },
      output: {
        filename: `lib/[name]/index.js`,
        libraryTarget: "umd",
        libraryExport: "default",
        library: ["gui", "[name]"]
      },
      externals: {
        vue: {
          root: "Vue",
          commonjs: "vue",
          commonjs2: "vue",
          amd: "vue"
        }
      }
    },
    css: {
      sourceMap: true,
      extract: {
        filename: "css/[name]/style.css"
      }
    },
    chainWebpack: config => {
      config.optimization.delete("splitChunks");
      config.plugins.delete("copy");
      config.plugins.delete("preload");
      config.plugins.delete("prefetch");
      config.plugins.delete("html");
      config.plugins.delete("hmr");
      config.entryPoints.delete("app");
    }
  };
} else if (process.env.NODE_ENV == "development") {
  const setting = require("./config/setting");
  module.exports = {
    lintOnSave: process.env.NODE_ENV === "development",
    devServer: {
      port: process.env.port || "2021",
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
}
