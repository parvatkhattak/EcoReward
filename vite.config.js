import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// VITE_BASE_URL is injected by the GitHub Actions workflow as the repo name.
// e.g. if your repo is https://github.com/username/ecoreward
// set VITE_BASE_URL=/ecoreward/ in the workflow env.
// Locally it falls back to '/' so `npm run dev` works without changes.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_URL || '/',
})
