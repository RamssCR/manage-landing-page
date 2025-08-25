import { defineConfig, globalIgnores } from 'eslint/config'
import a11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import js from '@eslint/js'
import reactDOM from 'eslint-plugin-react-dom'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from 'eslint-plugin-react-x'

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'html']),
  {
    extends: [
      js.configs.all,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      reactX.configs.recommended,
      reactDOM.configs.recommended,
      a11y.flatConfigs.recommended,
    ],
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'no-console': 'off',
      'sort-keys': 'off',
      'no-ternary': 'off',
      'curly': 'off',
      'consistent-return': 'off'
    },
  },
])
