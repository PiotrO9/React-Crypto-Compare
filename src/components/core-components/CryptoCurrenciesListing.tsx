import { useState, useEffect } from 'react'
import GetCoinsList from '../../utils/CryptoUtils'
import CryptoCurrencyListElement from '../common-components/CryptoCurrencyListElement'

function CryptoCurrenciesListing() {
    const [CryptoInfo, setCryptoInfo] = useState([])

    useEffect(() => {
        GetCoinsList().then(res => setCryptoInfo(res))
    })

    return (
        <ul className="CryptoCurrenciesListing">
            {
                CryptoInfo.map((crypto) => {
                    return (<CryptoCurrencyListElement name={crypto.name}/>)
                })
            }
        </ul>
    )
}

export default CryptoCurrenciesListing