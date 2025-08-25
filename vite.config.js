import { coverageConfigDefaults, defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths'

/**
 * @type {import('vite').UserConfig}
 * @see https://vite.dev/config/
 */
export default defineConfig(({ mode }) => ({
  esbuild: {
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
  plugins: [react(), tsconfigPaths(), tailwindcss()],
  build: {
    target: 'esnext',
    minify: mode === 'production' ? 'esbuild' : false,
    sourcemap: mode !== 'production',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) return 'vendor'
          if (id.includes('src/utils')) return 'utils'
        },
      },
    },
  },
  server: {
    open: true,
  },
  test: {
    setupFiles: './test/setupTest.js',
    global: true,
    environment: 'jsdom',
    reporters: ['html', 'default'],
    coverage: {
      lcovReportDir: 'coverage/lcov-report',
      all: true,
      reporter: ['text', 'lcov'],
      exclude: [
        '**/*.config.*',
        '**/index.js',
        'html/**',
        'src/App.jsx',
        'src/main.jsx',
        'src/data/**',
        'src/variants/**',
        'test/**',
        'public/**',
        'scripts/**',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
}))
