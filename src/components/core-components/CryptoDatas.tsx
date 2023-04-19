import './CryptoDatas.scss'
import ChartDatas from './ChartDatas'
import { ChartData } from 'chart.js'
import { useEffect, useState } from 'react'
import { GetCoinMarketChart } from '../../utils/CryptoUtils'
import MarketChartPoint from '../../types/MarketChartPoint'
import getTimestamps from '../../utils/GetTimeStamps'
import CryptoBadges from './CryptoBadges'
import { ActiveCryptoContext } from '../../context/ActiveCryptoContext'
import ActiveCryptoContextType from '../../types/ActiveCryptoContextType'
import { useContext } from 'react'

function CryptoDatas() {
    const [marketDatas, setMarketDatas] = useState();
    const { ActiveCryptos, AddCrypto } = useContext(ActiveCryptoContext) as ActiveCryptoContextType

    useEffect(() => {
        const ActiveCryptosIds = ActiveCryptos.map(crypto => crypto.id)
        console.log(ActiveCryptosIds)
        test(ActiveCryptosIds)
    }, [ActiveCryptos])

    useEffect(() =>  {
        const cryptoList = ["ripple"]

        // test(cryptoList)
    }, [])

    const test = async (cryptoList: Array<string>) => {
            
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

    return (
        <main>
            <ChartDatas datas={marketDatas}/>
            <CryptoBadges />
        </main>
    )
}

export default CryptoDatas