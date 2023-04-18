import * as React from 'react'
import ActiveCrypto from '../types/ActiveCrypto'
import ActiveCryptoContextType from '../types/ActiveCryptoContextType'

export const ActiveCryptoContext = React.createContext<ActiveCryptoContextType | null>(null)

const ActiveCryptoProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [ActiveCryptos, setActiveCryptos] = React.useState<Array<ActiveCrypto>>([])
    
    const AddCrypto = (crypto: ActiveCrypto) => {
        if(!CheckIfCryptoIsActive(crypto.name)) {
            setActiveCryptos([...ActiveCryptos, crypto])
        }
        else {
            RemoveCrypto(crypto.id)
        }
    }

    const CheckIfCryptoIsActive = (cryptoName: string): boolean => {
        const duplicatedCryptos = ActiveCryptos.filter(crypto => crypto.name == cryptoName)

        return duplicatedCryptos.length > 0 ? true : false;
    }

    const RemoveCrypto = (cryptoId: string) => {
        const newArrayValues = ActiveCryptos.filter(crypto => crypto.id != cryptoId)
        setActiveCryptos([...newArrayValues])
    }

    return (
        <ActiveCryptoContext.Provider value={{ ActiveCryptos, AddCrypto }}>
            {children}
        </ActiveCryptoContext.Provider>
        )
}

export default ActiveCryptoProvider