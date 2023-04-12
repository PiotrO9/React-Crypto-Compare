import MarketChartPoint from "../types/MarketChartPoint";

function getTimestamps(marketData: Array<MarketChartPoint>): Array<string> {
    if (marketData.length === 0) return [];

    const timestamps: string[] = marketData.map(point => new Date(point.timestamp).toLocaleTimeString());

    console.log(timestamps)
    return timestamps;
}

export default getTimestamps