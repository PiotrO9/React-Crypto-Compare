import Coin from "../types/Coin";
import MarketChartPoint from "../types/MarketChartPoint";
import  decimateArray  from "./DecimateArray";

export default async function GetCoinsList() {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    return res.json()
}

export async function GetCoinMarketChart(coin: string, currency: string, decimation: number) {
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?id=${coin}&vs_currency=${currency}&days=1`);
    const data = await res.json();

    const marketChart = data.prices.map((point: number[]) => ({
        timestamp: point[0],
        price: point[1]
    }));

    return decimateArray(marketChart, 1, decimation)
}