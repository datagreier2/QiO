import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base:
    command === 'build'
      ? existsSync('CNAME')
        ? '/'
        : '/QiO/'
      : '/',
  plugins: [react()],
}))
