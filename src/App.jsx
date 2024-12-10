import { useState } from 'react'
import Navbar from './components/navbar'
import UserDashboard from './components/username'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <UserDashboard/>
    </>
  )
}

export default App
