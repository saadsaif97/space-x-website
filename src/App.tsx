import { useState } from 'react'
import './App.css'
import LaunchContainer from './components/Launch'
import LaunchInfoContainer from './components/LaunchInfo'

function App() {
  const [id, setId] = useState('1')

  return (
    <div className='App'>
      <LaunchContainer setId={setId} />
      <LaunchInfoContainer id={id} />
    </div>
  )
}

export default App
