import { ChartData, Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
import { Line } from 'react-chartjs-2'

Chart.register(CategoryScale, LinearScale, PointElement, LineElement);

type Props = {
    datas: ChartData<'line'>;
}

function ChartDatas({datas}: Props) {
    

    return (
        <Line datasetIdKey='id' data={datas} />
    )
}

export default ChartDatas