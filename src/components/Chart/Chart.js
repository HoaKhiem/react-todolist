import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';
import "./Chart.css"
const Chart = (props) =>{
  const state = {
    labels: ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'],
    datasets: [
      {
        label: 'Rainfall',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4',
          '#e30d87',
          '#083bfa'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F',
        '#711549',
        '#0a1a57'
        ],
        data: [...props.data]
      }
    ]
  }
    return (
        <div>
          <Pie
            data={state}
            options={{
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:1
              },
              legend:{
                display:true,
                position:'right'
              }
            }}
          />
        </div>
      );
}
export default Chart