import { existsSync } from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const hasCname =
    existsSync('CNAME') || existsSync('public/CNAME') || existsSync('./public/CNAME')
  const base =
    command === 'build'
      ? hasCname
        ? '/'
        : '/QiO/'
      : '/'

  return {
    base,
    plugins: [react()],
  }
})
