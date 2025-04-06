import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Yerassyl1008/react-1.git",
  plugins: [react()],
})
