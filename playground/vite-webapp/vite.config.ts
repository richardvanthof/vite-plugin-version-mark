import {defineConfig} from 'vite'
import type {Plugin} from 'vite'
import vue from '@vitejs/plugin-vue'
import {vitePluginVersionMark} from '../../src/plugins/vite'

const testPlugin: () => Plugin = () => ({
  name: 'test-plugin',
  config (config) {
    // get version in vitePlugin if you open `ifGlobal`
    console.log(config.define)
  },
})
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-plugin-version-mark',
  build: {
    sourcemap: true,
  },
  plugins: [
    vue(),
    vitePluginVersionMark({
      // ifGitSHA: true, 
      // command: 'git describe --tags',
      ifShortSHA: true,
      ifMeta: true, 
      ifLog: true, 
      ifGlobal: true,
      ifExport: true,
      outputFile: true,
    }),
    testPlugin(),
  ],
})
