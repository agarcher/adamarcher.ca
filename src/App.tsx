import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Section from './components/Section'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const lastSection = document.querySelector('.last-section') as HTMLElement;
    const footer = document.querySelector('.footer') as HTMLElement;

    const handleScroll = () => {
      if (lastSection && footer) {
        const lastSectionRect = lastSection.getBoundingClientRect();
        if (lastSectionRect.bottom <= window.innerHeight) {
          footer.style.bottom = '0';
        } else {
          footer.style.bottom = '-64px';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300">
        <Header />
        <div className="flex-1 text-foreground transition-colors duration-300">
          <main className="mx-auto">
            <Section id="top">
              <Hero />
            </Section>
            <Section id="about">
              <About />
            </Section>
            <Section id="contact" className="last-section">
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
