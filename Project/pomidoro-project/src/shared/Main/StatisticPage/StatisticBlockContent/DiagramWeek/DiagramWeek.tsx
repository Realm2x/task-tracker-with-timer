import './diagramweek.css';
import 'chart.js/auto';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../store/store';
import { useEffect, useRef, useState } from 'react';
import { dateConversion } from '../../../../../hooks/statDaysOfWeek';
import { activeDay } from '../../../../../store/statisticData/statisticData';

export function DiagramWeek() {
  const statistic = useSelector((state: RootState) => state.statistic);
  const [statisticData, setStatisticData] = useState(new Array());
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const dataStat = dateConversion(statistic);
    setStatisticData(dataStat);
  }, [statistic]);
  
  const chartRef = useRef<any>();
  
  const onClick = (event: any) => {
    const elem = getElementAtEvent(chartRef.current, event)
    
    if (elem.length > 0) {
      const index = elem[0].index;
      dispatch(activeDay(statisticData[index].currentDate));
    }
  }

  const data = {
    labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    datasets: [{
        data: statisticData.map(e => e.timeWorking),
        backgroundColor: '#EA8979',
        links: ['']
    }],
  }

  return (
    <div className='statisticDiagramWeek'>
      <Bar
        data={data}
        ref={chartRef}
        onClick={onClick}
        options={{
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: false,
            },
          },
          events: ['click', 'mousemove'],
          scales: {
            y: {
              min: 0,
              max: 100,
              position: 'right',
              border: {
                display: false,
              },
              ticks: {
                stepSize: 25,
                callback: function(value) {
                  if (value === 0) { return null }
                  let hours;
                  if (+value < 60) { return value + ' мин' }
                  if (+value >= 60) {
                    hours = Math.floor(+value / 60);
                    value = +value - hours * 60;
                    return hours + ' час ' + value + ' мин';
                  }
                }
              },
            },
            x: {
              backgroundColor: '#ECECEC',
              grid: {
                display: false,
              }
            }
          }
        }}
      />
    </div>
  );
}
