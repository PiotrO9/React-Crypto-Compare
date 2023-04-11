import './CryptoDatas.scss'
import ChartDatas from './ChartDatas'
import { ChartData } from 'chart.js'
import { useState } from 'react'

function CryptoDatas() {
    const [UserDatas, setUserDatas] = useState({
        labels: ['label1', 'label2', 'label3'],
        datasets: [
            {
                label: "User Gained",
                data: [1,7,3,4,5],
                backgroundColor: [
                    "rgba(75,192,192,1)",
                    "#ecf0f1",
                    "#50AF95",
                    "#f3ba2f",
                    "#2a71d0",
                  ],
            },
        ],
    });

    return (
        <main>
            <ChartDatas datas={UserDatas}/>
        </main>
    )
}

export default CryptoDatas