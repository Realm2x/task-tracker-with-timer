import './diagramweek.css';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export function DiagramWeek() {
  function hoursEarlier(minutes: number) {
    let time = new Date(new Date().getTime() - (minutes * 60 * 1000));
    return time;
  };
  const data = {
    // labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    datasets: [{
        label: 'Work',
        // data: ['25 м', 50, 75, 100, 200, 0, 0],
        data: [{id: 'ПН', nested: {value: hoursEarlier(25)}}, {id: 'ВТ', nested: {value: 50}}, {id: 'СР', nested: {value: 25}}, {id: 'ЧТ', nested: {value: 100}}]
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
          parsing: {
            xAxisKey: 'id',
            yAxisKey: 'nested.value'
          },
          scales: {
            y: {
              type: 'time',
              time: {
                unit: "minute",
                tooltipFormat: "hh:mm",
                displayFormats: {
                  "minute": "hh:mm"
                }
              },
              ticks: {
                stepSize: 25,
              }
            }
          }
        }}
      />
    </div>
  );
}
