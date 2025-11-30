import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
    "images": path.resolve(__dirname, "/src/assets/images"),  
    "data": path.resolve(__dirname, "/src/data"),  
    "components": path.resolve(__dirname, "/src/components"),
     "css": path.resolve(__dirname, "/src/assets/stylesheet"), 
     "pages": path.resolve(__dirname, "/src/pages"),
    }
  }
})
