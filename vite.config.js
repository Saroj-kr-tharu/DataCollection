import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
      Components: "/src/Components",
      Pages: "/src/Pages",
      Assets: "/src/Assets",
      Config: "/src/Config",
      Layout: "/src/Layout",
      Redux: "/src/Redux",
      Routes: "/src/Routes",
      Utils: "/src/Utils",


    }
  }
});

