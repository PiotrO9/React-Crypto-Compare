import { useContext, useEffect } from 'react'
import './CryptoBadges.scss'
import ActiveCryptoContextType from '../../types/ActiveCryptoContextType'
import { ActiveCryptoContext } from '../../context/ActiveCryptoContext'

function CryptoBadges() {
    const { ActiveCryptos, AddCrypto } = useContext(ActiveCryptoContext) as ActiveCryptoContextType

    useEffect(() => {
        console.log(ActiveCryptos)
    }, [ActiveCryptos])

    return (
        <div className="CryptoBadges">
            {
                ActiveCryptos.map(crypto => {
                    return (<div>{crypto.name}</div>)
                })
            }
        </div>
    )
}

export default CryptoBadges