import { Background, Background2 } from './Components/Background'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Body/Home'

/**
 * Componente principal de la aplicación.
 * @returns {import('react').JSX.Element} Componente App.
 * @example
 * <App />
 */
export default function App() {
  return (
    <main className="bg-color-primary-bg relative min-h-screen w-full overflow-hidden">
      <Background />
      <Background2 />
      <Header />
      <Home />
      <Footer />
    </main>
  )
}
