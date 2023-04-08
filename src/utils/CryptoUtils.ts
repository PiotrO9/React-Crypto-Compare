import Coin from "../types/Coin";
import MarketChartPoint from "../types/MarketChartPoint";

export default async function GetCoinsList() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    return res.json()
}