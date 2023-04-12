import { ChartData, Chart, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, plugins } from 'chart.js'
import { useEffect } from 'react';
import { Line } from 'react-chartjs-2'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import Coin from '../../types/Coin';
import { callback } from 'chart.js/dist/helpers/helpers.core';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip );

type Props = {
    datas: ChartData<'line'>;
}

function ChartDatas({datas}: Props) {
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => {

                    }
                }
            }
        }
    }

    useEffect(() => {
        const tmp: Coin = { id: "bitcoin", symbol: "123", current_price: 123, image: "123", name: "bitcoin" }
    })

    return (
        <Line 
        datasetIdKey='id'
        data={datas}
        options={{
            plugins: {
                tooltip: {
                    callbacks: {
                        label: (context) => {
                            return "123"
                        }
                    }
                }
            }
        }}
        />
    )
}

export default ChartDatas