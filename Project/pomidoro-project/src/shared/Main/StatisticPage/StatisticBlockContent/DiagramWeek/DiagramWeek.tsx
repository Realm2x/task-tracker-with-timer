import './diagramweek.css';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export function DiagramWeek() {


  const data = {
    labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    datasets: [{
        data: [25, 50, 35, 70, 40, 0, 0],
        backgroundColor: '#EA8979',
    }],
  }

  return (
    <div className='statisticDiagramWeek'>
      <Bar
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
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
