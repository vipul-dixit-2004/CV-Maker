import { useState } from 'react'
import InputSection from './components/InputSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <InputSection />
  )
}

export default App
