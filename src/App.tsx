import { useState } from 'react'
import './App.scss'
import CryptoDatas from './components/core-components/CryptoDatas'
import CryptoList from './components/core-components/CryptoList'

function App() {

  return (
    <div className="App">
      <CryptoList />
      <CryptoDatas />
    </div>
  )
}

export default App
