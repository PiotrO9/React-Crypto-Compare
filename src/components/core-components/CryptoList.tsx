import { useState, useEffect } from 'react'
import './CryptoList.scss'
import CryptoSearch from './CryptoSearch'
import CryptoCurrenciesListing from './CryptoCurrenciesListing'
import GetCoinsList from '../../utils/CryptoUtils'

function CryptoList() {

    return (
        <aside>
            <CryptoSearch />
            <CryptoCurrenciesListing />
        </aside>
    )
}
 
export default CryptoList