import { access, copyFile } from 'node:fs/promises'
import { constants } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const cwd = dirname(fileURLToPath(import.meta.url))
const distDir = resolve(cwd, '../dist')
const indexHtmlPath = resolve(distDir, 'index.html')
const fallbackPath = resolve(distDir, '404.html')

async function ensureSpaFallback() {
  try {
    await access(indexHtmlPath, constants.R_OK)
  } catch (error) {
    console.warn(
      `postbuild: skipped 404 fallback – could not read ${indexHtmlPath}:`,
      error instanceof Error ? error.message : error,
    )
    return
  }

  await copyFile(indexHtmlPath, fallbackPath)
  console.log('postbuild: wrote SPA fallback to', fallbackPath)
}

ensureSpaFallback().catch((error) => {
  console.error('postbuild: failed to create 404 fallback:', error)
  process.exitCode = 1
})
