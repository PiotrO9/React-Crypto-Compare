import './CryptoList.scss'
import CryptoSearch from './CryptoSearch'
import CryptoCurrenciesListing from './CryptoCurrenciesListing'

function CryptoList() {
    return (
        <aside>
            <CryptoSearch />
            <CryptoCurrenciesListing />
        </aside>
    )
}
 
export default CryptoList