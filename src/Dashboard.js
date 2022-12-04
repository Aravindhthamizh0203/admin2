import React from 'react'
import Card from './Card';
import { Doughnut, Line } from 'react-chartjs-2';
import { createSearchParams, useParams, useSearchParams } from 'react-router-dom';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title);


function Dashboard() {
    const [searchParams, setParams] = useSearchParams()
    console.log([...searchParams]);
    console.log(Object.fromEntries([...searchParams]));
    return (<>
        <button
            onClick={() => {
                setParams(createSearchParams({ ...Object.fromEntries([...searchParams]), price: '5' }))
            }}>changeprice</button>
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
            <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
                <i class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
        </div>
        <div class="row">
            <Card title="day" value="250" color="info" />
            <Card title="week" value="1250" color="primary" />
            <Card title="month" value="5000" color="warning" />
            <Card title="year" value="60000" color="success" />
        </div>
        <div className='row'>
            <div className='col-lg-8'>
                <Line options={{
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'month',
                        },
                    },
                }} data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July'
                    ],
                    datasets: [{
                        label: 'My Salary',
                        data: [65, 59, 80, 81, 56, 55, 40],
                        fill: false,
                        borderColor: 'rgb(240, 9, 9)',
                        tension: 0.1
                    }]
                }} />;
            </div>

            <div className='col-lg-4'>
                <Doughnut data={{
                    labels: [
                        'day',
                        'Week',
                        'Month',
                        'Year'
                    ],
                    datasets: [{
                        label: 'My Income',
                        data: [27, 48, 13, 12],
                        backgroundColor: [
                            'rgb(0, 76, 135)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 205, 86)',
                            'rgb(0,255,0)'
                        ],
                        hoverOffset: 4
                    }]
                }} />

            </div>
        </div>

    </>

    )
}

export default Dashboard;