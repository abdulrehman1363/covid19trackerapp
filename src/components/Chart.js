import React ,{useEffect,useState}from 'react'
import fetchDaily from '../api/getDaily/GetDailyAPI'
import {Line , Bar } from 'react-chartjs-2'
import './cards.css'


export const Chart = (props) => {


    const [dailyData,setDailyData] = useState([])

    useEffect(()=>{
        async function getaDailyData(){
            setDailyData(await fetchDaily());
        }
        getaDailyData();
    },[setDailyData])

    const lineChart = (
        dailyData.length ? ( 
        <Line 
            data={{
                labels : dailyData.map(({date}) => date),
                datasets : [{
                    data : dailyData.map(({confirmed}) => confirmed),
                    label: "infected",
                    borderColor: "blue",
                    fill: true
                },{
                    
                        data : dailyData.map(({deaths}) => deaths),
                        label: "Deaths",
                        borderColor: "red",
                        fill: true
                }]
            }}
        />
        ) : 
        null
    )
    const barChart = (
        props.confirmed ? 
        <Bar 
            data = {{
                labels : ['Infected','Recovered','Deaths'],
                datasets : [{
                    label : 'People',
                    backgroundColor: [
                        'blue',
                        'green',
                        'red'
                    ],
                    data : [props.confirmed ,props.recovered,props.deaths]
                }]
            }}
            options = {{
                legend : {display : false},
                title : {display : true ,text : `current state in ${props.country}`}
            }}

        />
        : null
    )

    return (
        <div className="container">
            {props.country ? barChart : lineChart}
        </div>
    )
}
