import { useState } from 'react' 

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer.tsx'
import Header from './components/Header'
import Home from './pages/Home.tsx'
import Navbar from './components/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <div className="flex flex-col h-screen">
          <Header />
          <Navbar />

          <main className="main flex-grow">
            <div className='container'>
              
              <Home />

              {/*<div className="main flex items-center">
                <div className="">
                  <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                  </a>
                  <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                  </a>
                </div>
                <h1>Vite + React</h1>
                <div className="card">
                  <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                  </button>
                  <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                  </p>
                </div>
                <p className="read-the-docs">
                  Click on the Vite and React logos to learn more
                </p>
              </div>*/}
            </div>
          </main>


          
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
