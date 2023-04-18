import { useContext, useEffect } from 'react'
import './CryptoBadges.scss'
import ActiveCryptoContextType from '../../types/ActiveCryptoContextType'
import { ActiveCryptoContext } from '../../context/ActiveCryptoContext'
import CryptoBadge from '../common-components/CryptoBadge'

function CryptoBadges() {
    const { ActiveCryptos, AddCrypto } = useContext(ActiveCryptoContext) as ActiveCryptoContextType

    useEffect(() => {
        console.log(ActiveCryptos)
    }, [ActiveCryptos])

    const handleCryptoRemove = (cryptoName: string) => {
        console.log(cryptoName)
    }

    return (
        <div className="CryptoBadges">
            {
                ActiveCryptos.map(crypto => {
                    return (<CryptoBadge cryptoRemove={handleCryptoRemove} name={crypto.name}/>)
                })
            }
        </div>
    )
}

export default CryptoBadges