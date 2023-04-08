import { useState, useEffect } from 'react'
import GetCoinsList from '../../utils/CryptoUtils'
import CryptoCurrencyListElement from '../common-components/CryptoCurrencyListElement'
import Coin from '../../types/Coin'
import './CryptoCurrenciesListing.scss'

function CryptoCurrenciesListing() {
    const [CryptoInfo, setCryptoInfo] = useState<Array<Coin>>([])

    useEffect(() => {
        GetCoinsList().then(res => setCryptoInfo(res))
    })

    return (
        <ul className="CryptoCurrenciesListing">
            {
                CryptoInfo.map((crypto) => {
                    return (<CryptoCurrencyListElement key={crypto.id} name={crypto.name} image={crypto.image}/>)
                })
            }
        </ul>
    )
}

export default CryptoCurrenciesListing