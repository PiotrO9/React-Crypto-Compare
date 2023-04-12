import MarketChartPoint from "../types/MarketChartPoint";

export default function decimateArray(arr: Array<unknown>, passes: number = 1, fidelity: number = 2): Array<unknown> {
    let tmpArr = arr.filter((_, index) => index % fidelity === 0);
    passes--;
    if (passes) {
        tmpArr = decimateArray(tmpArr, passes, fidelity);
    }
    return tmpArr;
}