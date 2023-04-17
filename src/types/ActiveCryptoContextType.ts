import ActiveCrypto from './ActiveCrypto' 

type ActiveCryptoContextType = {
    ActiveCryptos: Array<ActiveCrypto>,
    AddCrypto: (crypto: ActiveCrypto) => void
}

export default ActiveCryptoContextType
