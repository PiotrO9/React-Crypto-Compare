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
    const options = {
        datasets: {
            line: {
                backgroundColor: "red"
            },
        },
    }

    useEffect(() => {
        const tmp: Coin = { id: "bitcoin", symbol: "123", current_price: 123, image: "123", name: "bitcoin" }
    })

    return (
        <Line datasetIdKey='id' data={datas} options={options}/>
    )
}

export default ChartDatas