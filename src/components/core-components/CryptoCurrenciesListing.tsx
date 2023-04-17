import { useState, useEffect, useContext } from 'react'
import GetCoinsList from '../../utils/CryptoUtils'
import CryptoCurrencyListElement from '../common-components/CryptoCurrencyListElement'
import Coin from '../../types/Coin'
import './CryptoCurrenciesListing.scss'
import { ActiveCryptoContext } from '../../context/ActiveCryptoContext'
import ActiveCryptoContextType from '../../types/ActiveCryptoContextType'

function CryptoCurrenciesListing() {
    const [CryptoInfo, setCryptoInfo] = useState<Array<Coin>>([])
    const { ActiveCryptos } = useContext(ActiveCryptoContext) as ActiveCryptoContextType
    
    useEffect(() => {
        GetCoinsList().then(res => setCryptoInfo(res))
    })

    useEffect(() => {
        console.log(ActiveCryptos)
    }, [ActiveCryptos])

    function handleCryptocurrencyClick(name: string) {
        
    }

    return (
        <ul className="CryptoCurrenciesListing">
            {
                CryptoInfo.map((crypto) => {
                    return (<CryptoCurrencyListElement 
                        key={crypto.id} 
                        name={crypto.name} 
                        image={crypto.image}
                        CryptocurrencyClick={handleCryptocurrencyClick}/>)
                })
            }
        </ul>
    )
}

export default CryptoCurrenciesListing