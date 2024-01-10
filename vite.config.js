import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.PNG"],//add this line to fix PNG file not showing: assetsInclude: ["**/*.PNG"]
})
