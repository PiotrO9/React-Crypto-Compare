import { createContext, useState } from 'react'
import './App.scss'
import CryptoDatas from './components/core-components/CryptoDatas'
import CryptoList from './components/core-components/CryptoList'
import ActiveCryptoProvider from './context/ActiveCryptoContext'

export const ActiveCryptocurrenciesContext = createContext([]);

function App() {

  return (
    <ActiveCryptoProvider>
      <div className="App">
        <CryptoList />
        <CryptoDatas />
      </div>
    </ActiveCryptoProvider>
  )
}

export default App
