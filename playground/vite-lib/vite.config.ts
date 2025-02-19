import {defineConfig, type Plugin} from 'vite'
import {vitePluginVersionMark} from '../../src/plugins/vite'

export default defineConfig({
  build: {
    lib: {
      entry: './src/main.ts',
      name: 'Counter',
      fileName: 'counter',
    },
  },
  plugins: [
    vitePluginVersionMark({
      ifGitSHA: true, 
      ifShortSHA: true, 
      ifMeta: true, 
      ifLog: true, 
      ifGlobal: true,
      ifExport: true,
      outputFile: true,
    }) as Plugin,
  ],
})
