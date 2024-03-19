/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  root: 'src',
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    host: process.env['HOST'],
    port: parseInt(process.env['PORT'], 10),
  },
  publicDir: '../public',
  build: {
    outDir: '../dist',
  },
})
