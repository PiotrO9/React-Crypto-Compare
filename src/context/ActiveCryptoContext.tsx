import * as React from 'react'
import ActiveCrypto from '../types/ActiveCrypto'
import ActiveCryptoContextType from '../types/ActiveCryptoContextType'

export const ActiveCryptoContext = React.createContext<ActiveCryptoContextType | null>(null)

const ActiveCryptoProvider: React.FC<React.ReactNode> = ({ children }) => {
    const [ActiveCryptos, setActiveCryptos] = React.useState<Array<ActiveCrypto>>([])
    
    const AddCrypto = (crypto: ActiveCrypto) => {

    }

    return (
        <ActiveCryptoContext.Provider value={{ ActiveCryptos, AddCrypto }}>
            {children}
        </ActiveCryptoContext.Provider>
        )
}

export default ActiveCryptoProvider