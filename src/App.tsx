import { useState } from 'react'
import './App.css'
import LaunchContainer from './components/Launch'
import LaunchInfoContainer from './components/LaunchInfo'

function App() {
  const [id, setId] = useState('1')
  const [open, setOpen] = useState(true)

  const openStyle = {
    gridTemplateColumns: '300px 1fr',
  }
  const closeStyle = {
    gridTemplateColumns: '1fr',
  }

  return (
    <div className='App' style={open ? { ...openStyle } : { ...closeStyle }}>
      <LaunchContainer idState={{ id, setId }} open={open} />
      <LaunchInfoContainer
        idState={{ id, setId }}
        openState={{ open, setOpen }}
      />
    </div>
  )
}

export default App
