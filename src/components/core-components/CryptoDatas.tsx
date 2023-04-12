import './CryptoDatas.scss'
import ChartDatas from './ChartDatas'
import { ChartData } from 'chart.js'
import { useEffect, useState } from 'react'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import MarketChartPoint from '../../types/MarketChartPoint'
import getTimestamps from '../../utils/GetTimeStamps'

function CryptoDatas() {
    const [UserDatas, setUserDatas] = useState({
        labels: ['label1', 'label2', 'label3'],
        datasets: [
            {
                label: "User Gained",
                data: [],
                backgroundColor: [
                    "red",
                  ],
                borderColor: "red"
            },
        ],
    });

    useEffect(() => {
        GetCoinMarketChart("bitcoin", "usd", 2).then(res => {
            const newDatas = {
                labels: getTimestamps(res),
                datasets: [
                    {
                        label: "Datas",
                        data: res.map(item => item.price)
                    },
                ],
                options: {
                    datasets: {
                        line: {
                            backgroundColor: "red"
                        }
                    },
                }
            }

            setUserDatas(newDatas)
        });
        
    }, [])

    useEffect(() => {
        console.log(123)
    }, [UserDatas]);

    return (
        <main>
            <ChartDatas datas={UserDatas}/>
        </main>
    )
}

export default CryptoDatas