import './CryptoDatas.scss'
import ChartDatas from './ChartDatas'
import { ChartData } from 'chart.js'
import { useEffect, useState } from 'react'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import MarketChartPoint from '../../types/MarketChartPoint'
import getTimestamps from '../../utils/GetTimeStamps'

function CryptoDatas() {
    const [UserDatas, setUserDatas] = useState({
        labels: [],
        datasets: [
            {
                label: "User Gained",
                data: [],
            },
        ],
        options: { 
            hover: {
                intersect: true
            }
        }
    });

    useEffect(() => {
        GetCoinMarketChart("bitcoin", "usd", 2).then(res => {
            const newDatas = {
                labels: getTimestamps(res),
                datasets: [
                    {
                        label: "Datas",
                        data: res.map(item => item.price),
                        borderColor: "purple",
                        backgroundColor: "purple",
                        hoverRadius: 4,
                        hoverBorderWidth: 5
                    },
                    {
                        label: "test",
                        data: [30000, 30300, 30000, 30000],
                        borderColor: "red",
                        backgroundColor: "red"
                    }
                ],
                options: {
                    datasets: {
                        line: {
                            borderColor: "blue"
                        }
                    },
                    hover: {
                        intersect: true
                    }
                }
            }

            setUserDatas(newDatas)
        });
        
    }, [])

    useEffect(() => {
       
    }, [UserDatas]);

    return (
        <main>
            <ChartDatas datas={UserDatas}/>
        </main>
    )
}

export default CryptoDatas