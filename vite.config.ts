import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  build: mode === 'package'
    ? {
      lib: {
        entry: 'src/lib/index.ts',
        name: 'qui',
        fileName: (format) => `index.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
        sourcemap: true,
        emptyOutDir: true,
      },
    } : {},
}))
