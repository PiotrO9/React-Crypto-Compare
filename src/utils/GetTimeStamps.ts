import MarketChartPoint from "../types/MarketChartPoint";

function getTimestamps(marketData: Array<MarketChartPoint>): Array<string> {
    if (marketData.length === 0) return [];

    const timestamps: string[] = marketData.map(point => new Date(point.timestamp).toLocaleTimeString());

    return timestamps;
}

export default getTimestamps