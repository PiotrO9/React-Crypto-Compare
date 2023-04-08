import './CryptoCurrencyListElement.scss'

function CryptoCurrencyListElement(props) {
    return (
        <li><img src={props.image} /><p>{props.name}</p></li>
    )
}

export default CryptoCurrencyListElement