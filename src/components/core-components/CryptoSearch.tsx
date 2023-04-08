import { useRef } from "react"
import './CryptoSearch.scss'

function CryptoSearch() {
    return (
        <div className="CryptoSearch">
            <div className="CryptoSearch__input">
                <input type="text" placeholder="Search cryptocurrencies..."/>
            </div>
        </div>
    )
}

export default CryptoSearch