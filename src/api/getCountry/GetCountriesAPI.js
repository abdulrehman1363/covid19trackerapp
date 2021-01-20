const url = "https://covid19.mathdro.id/api"

const fetchCountries = async () => {
    try{
        const response = await fetch(`${url}/countries`)
        const {countries} = await response.json()
        
       
        return countries.map((country) => country.name)
    }catch(error){
        console.log(error)
    }
}

export default fetchCountries