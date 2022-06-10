const { resolve } = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        order: resolve(__dirname, "order.html"),
        detail: resolve(__dirname, "pageDetail.html"),
        pageDetail: resolve(__dirname, "pageDetail.html"),
        signin: resolve(__dirname, "signin.html"),
        signup: resolve(__dirname, "signup.html"),
      },
    },
  },
});
