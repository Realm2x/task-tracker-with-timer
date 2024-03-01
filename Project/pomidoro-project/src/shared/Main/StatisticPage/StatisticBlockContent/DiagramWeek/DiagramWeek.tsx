import './diagramweek.css';
import 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

export function DiagramWeek() {
  const data = {
    labels: ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'],
    datasets: [{
        label: 'Work',
        data: [25, 50, 75, 100, 200, 0, 0],
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
              position: 'right',
              border: {
                color: '#333333',
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
