import './App.css'
import { ThemeProvider } from './contexts/ThemeContext'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialLinks from './components/SocialLinks'

function App() {
  return (
    <ThemeProvider>
      <div className="p-2">
        <Header />
        <div className="min-h-screen text-foreground">
          <main>
            <Hero />
            <About />
            <SocialLinks />
            <ContactForm />
          </main>
        </div>
      </div>
      <Footer />
    </ThemeProvider>
  )
}

export default App
