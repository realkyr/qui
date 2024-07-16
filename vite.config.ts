import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build:
    mode === 'package'
      ? {
          lib: {
            entry: resolve(__dirname, './src/lib/index.ts'),
            name: 'qui',
            fileName: 'qui'
          },
          rollupOptions: {
            external: ['react', 'react-dom', 'tailwindcss'],
            output: {
              globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                tailwindcss: 'tailwindcss'
              }
            }
          },
          sourcemap: true,
          emptyOutDir: true
        }
      : {},
  plugins: [react(), dts({ rollupTypes: true })],
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
}))
