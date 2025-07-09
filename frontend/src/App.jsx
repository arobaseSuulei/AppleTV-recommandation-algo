import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-24 w-24 animate-spin-slow" alt="React logo" />
          </a>
        </div>
        <h1 className="text-6xl font-bold text-white mb-8">AppleTV + React</h1>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors mb-4"
          >
            Count is {count}
          </button>
          <p className="text-gray-200">
            Edit <code className="bg-gray-800 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="text-gray-300">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
