import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import SocialLinks from './components/SocialLinks'
import Section from './components/Section'

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <div className="text-foreground">
          <main>
            <Section>
              <Hero />
            </Section>
            <Section>
              <About />
            </Section>
            <Section>
              <SocialLinks />
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
