import './CryptoCurrencyListElement.scss'

function CryptoCurrencyListElement(props) {
    function CryptocurrencyClick() {
        props.CryptocurrencyClick({name: props.name, id: props.id})
    }

    return (
        <li onClick={CryptocurrencyClick}><img src={props.image} /><p>{props.name}</p></li>
    )
}

export default CryptoCurrencyListElement