import React, { useEffect, useRef, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import Chart from 'chart.js/auto';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const [chartData, setChartData] = useState(null);  // State to hold the chart data
  const chartRef = useRef(null);  // Ref to hold the chart instance

  useEffect(() => {
    // Log the coinHistory to debug the changes
    console.log(coinHistory);

    // Check if history data is available before creating chart
    if (coinHistory?.data?.history && coinHistory.data.history.length) {
      const coinPrice = [];
      const coinTimestamp = [];

      for (let i = 0; i < coinHistory.data.history.length; i++) {
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(
          new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString()
        ); // Multiplying by 1000 to convert timestamp to milliseconds
      }

      // Update the chart data
      setChartData({
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      });
    } else {
      console.error('Coin history data is missing or empty.');
    }
  }, [coinHistory?.data?.history]); // Trigger effect when coinHistory changes

  // Early return if chartData is not ready yet
  if (!chartData) {
    return <div>Loading chart data...</div>;
  }

  // Options for the chart
  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line ref={chartRef} data={chartData} options={options} />
    </>
  );
};

export default LineChart;
