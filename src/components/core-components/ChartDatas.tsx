import { ChartData, Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import Coin from '../../types/Coin';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

type Props = {
    datas: ChartData<'line'>;
}

function ChartDatas({datas}: Props) {
    useEffect(() => {
        const tmp: Coin = { id: "bitcoin", symbol: "123", current_price: 123, image: "123", name: "bitcoin" }

        //GetCoinMarketChart("bitcoin", "pln", 2).then(res => console.log(res))
    })

    return (
        <Line datasetIdKey='id' data={datas} />
    )
}

export default ChartDatas