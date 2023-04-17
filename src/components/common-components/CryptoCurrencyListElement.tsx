import './CryptoCurrencyListElement.scss'

function CryptoCurrencyListElement(props) {
    function CryptocurrencyClick() {
        console.log(123)
        props.CryptocurrencyClick(props.name)
    }

    return (
        <li onClick={CryptocurrencyClick}><img src={props.image} /><p>{props.name}</p></li>
    )
}

export default CryptoCurrencyListElement