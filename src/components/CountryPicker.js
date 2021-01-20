import React ,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import  fetchCountries   from "../api/getCountry/GetCountriesAPI";

const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));


export const CountryPicker = ({handleChange}) => {
    const classes = useStyles();
    // const [pickCountry, setPickCountry] = useState('');
    const [countries,setCountries] = useState([])
    

    useEffect(() => {

        async function getCountries(){
            const response = await fetchCountries()
            setCountries(response)
        }
        getCountries();
        
    },[setCountries]);

    //console.log(countries);

    // const handleChange = (event) => {
    //     setPickCountry(event.target.value);
    //   };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <NativeSelect defaultValue=""
                 onChange= { (e) => {handleChange(e.target.value)}}
                >
                    <option value="">Global</option>
                    {
                        countries.map((country,i) => <option key={i} value={country}>{country}</option>)
                    }

                
                
                </NativeSelect>
            </FormControl>
        </div>
    )
}


