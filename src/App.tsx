import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 text-foreground">
          <main className="container mx-auto">
            <Section>
              <Hero />
            </Section>
            <Section>
              <About />
            </Section>
            <Section>
              <ContactForm />
            </Section>
          </main>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
