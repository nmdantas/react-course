import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const totalMaximum = Math.max(...props.points.map(item => item.value));

  return (
    <div className="chart">
      {props.points.map((point) => (
        <ChartBar key={point.label} value={point.value} maxValue={totalMaximum} label={point.label} />
      ))}
    </div>
  );
};

export default Chart;
