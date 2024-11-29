import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Adam Archer
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Freelance Software Developer
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">About Me</h2>
            <p className="mt-4 text-gray-600">
              I'm a passionate software developer specializing in creating elegant, efficient solutions for web and mobile applications. With years of experience in modern technologies, I help businesses bring their ideas to life.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-gray-900">Contact</h2>
            <p className="mt-4 text-gray-600">
              Looking to start a project? Let's talk!
            </p>
            <a href="mailto:contact@adamarcher.dev" className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
