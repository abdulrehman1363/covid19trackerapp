import React from 'react';
import Paper from '@material-ui/core/Paper';
import './cards.css'
import CountUp from 'react-countup';

export default function Cards(props) {
  

  return (
    <div className="root">
      <Paper variant="outlined" ><h4>Confirmed</h4> <CountUp start={0} end={props.confirmed}  duration={5}/> </Paper>
      <Paper variant="outlined"  ><h4>Recovered</h4>  <CountUp start={0} end={props.recovered}  duration={5}/></Paper>
      <Paper variant="outlined"  ><h4>Deaths</h4> <CountUp start={0} end={props.deaths}  duration={5}/></Paper>
    </div>
  );
}