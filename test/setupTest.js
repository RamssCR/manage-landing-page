import { afterEach, beforeEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Simula los métodos de consola para evitar saturar la salida de las pruebas
beforeEach(() => {
  vi.spyOn(console, 'error').mockImplementation(vi.fn())
  vi.spyOn(console, 'log').mockImplementation(vi.fn())
})

// Simula variables de entorno
vi.stubEnv('VITE_VERSION', 'test')

// Limpia el DOM después de cada prueba
afterEach(() => {
  cleanup()

  // Restaura todos los mocks y limpia cualquier estado
  vi.restoreAllMocks()
  vi.clearAllMocks()
  vi.resetModules()
  vi.useRealTimers()
})

const DELAY_PLACEHOLDER = 0

// Simula APIs del navegador
vi.stubGlobal('requestAnimationFrame', (cb) => setTimeout(cb, DELAY_PLACEHOLDER))

window.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

window.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  takeRecords: vi.fn().mockReturnValue([]),
}))