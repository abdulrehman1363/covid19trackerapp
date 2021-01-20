import { useEffect ,useState} from "react";
import  Cards  from "./components/Cards";
import { Chart } from "./components/Chart";
import { CountryPicker } from "./components/CountryPicker";
import  fetchData   from "./api/index";

import './App.css';

function App() {

  const [data,setData] = useState({})
  const [isFetching, setFetching] = useState(true);
  const [country,setCountry] = useState('')
  

  useEffect(()=>{
    
    async function getData(){
      
      const response = await fetchData();

      setData(response)
      setFetching(false); 
      
    }
    getData();
    
  },[setData]);

  const handleChange = async (country) => {

    async function getData(country){
      
      const response = await fetchData(country);

      setData(response)
      setFetching(false); 
      
    }
    getData(country);
    setCountry(country);
  }
  console.log(data)
  
  if(isFetching){
    return ( <h2 className="App">Loading .....</h2>);
  }

  return (
    <div className="App">
      <Cards confirmed={data.confirmed.value} recovered={data.recovered.value} deaths={data.deaths.value}/>
      <CountryPicker handleChange={handleChange} />
      <Chart confirmed={data.confirmed.value} recovered={data.recovered.value} deaths={data.deaths.value} country={country}/>

    </div>
  );
}

export default App;
