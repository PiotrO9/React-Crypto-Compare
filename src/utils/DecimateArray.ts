import MarketChartPoint from "../types/MarketChartPoint";

export default function decimateArray(arr: Array<MarketChartPoint>, passes: number = 1, fidelity: number = 2): Array<unknown> {
    let tmpArr: Array<any> = [];

    for (let i = 0; i < arr.length; i++) {
        var pastTime = new Date(1970, 0, 1);
        pastTime.setSeconds(arr[i].timestamp);
        var nowTime = Date.now();
        if(nowTime - 86400 > arr[i].timestamp) {
            const result = pastTime.toString()
            tmpArr.push({timestamp: result, price: Number.parseFloat(arr[i].price.toFixed(fidelity))})
        }
    }

    console.log(tmpArr)

    return arr;
}