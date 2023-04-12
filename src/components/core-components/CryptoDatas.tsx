import './CryptoDatas.scss'
import ChartDatas from './ChartDatas'
import { ChartData } from 'chart.js'
import { useEffect, useState } from 'react'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import MarketChartPoint from '../../types/MarketChartPoint'
import getTimestamps from '../../utils/GetTimeStamps'

function CryptoDatas() {
    const [marketDatas, setMarketDatas] = useState();

    useEffect(() =>  {
        const cryptoList = ["bitcoin", "tether"]

        const test = async () => {
            
            const promises = cryptoList.map(async (element) => {
                const result = await GetCoinMarketChart(element.toString(), "usd", 2);
                return result
            })

            const result = await Promise.all(promises)
            fillDatasets(cryptoList, result)
        }

        const fillDatasets = (cryptoList: Array<string>, marketData: Array<Array<MarketChartPoint>>) => {
            const datasetDatas = () => {
                let tmp = []

                for(let i: number = 0; i < marketData.length; i++) {
                    tmp.push({
                        label: cryptoList[i],
                        data: marketData[i].map(item => item.price),
                        borderColor: "purple",
                        backgroundColor: "purple",
                        hoverRadius: 4,
                        hoverBorderWidth: 5
                    })
                }

                return tmp
            }
            
            const newDatas = {
                labels: getTimestamps(marketData[0]),
                datasets: datasetDatas()
            }

            setMarketDatas(newDatas)
        }

        test()


    //     // GetCoinMarketChart("bitcoin", "usd", 2).then(res => {
    //     //     const newDatas = {
    //     //         labels: getTimestamps(res),
    //     //         datasets: [
    //     //             {
    //     //                 label: "Datas",
    //     //                 data: res.map(item => item.price),
    //     //                 borderColor: "purple",
    //     //                 backgroundColor: "purple",
    //     //                 hoverRadius: 4,
    //     //                 hoverBorderWidth: 5
    //     //             },
    //     //             {
    //     //                 label: "test",
    //     //                 data: [30000, 30300, 30000, 30000],
    //     //                 borderColor: "red",
    //     //                 backgroundColor: "red"
    //     //             }
    //     //         ],
    //     //         options: {
    //     //             datasets: {
    //     //                 line: {
    //     //                     borderColor: "blue"
    //     //                 }
    //     //             },
    //     //             hover: {
    //     //                 intersect: true
    //     //             }
    //     //         }
    //     //     }

    //         //setMarketDatas(newDatas)
    //     // });
        
    //     // console.log(newDatas)

    }, [])

    return (
        <main>
            <ChartDatas datas={marketDatas}/>
        </main>
    )
}

export default CryptoDatas