import './CryptoBadge.scss'

function CryptoBadge(props) {
    const CryptoClick = () => {
        props.cryptoRemove(props.name)
    }

    return (
        <div className="CryptoBadge" onClick={CryptoClick}>
            {props.name}
        </div>
    )
}

export default CryptoBadge