const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        order: resolve(__dirname, 'order.html'),
        detail: resolve(__dirname, 'detail.html')
      }
    }
  }
})