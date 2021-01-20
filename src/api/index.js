
 const url = "https://covid19.mathdro.id/api"
//const url = "https://api.github.com/users/muhammadmohsin"

 const fetchData = async (country) => {
     let updatedUrl = url;

     if(country){
         updatedUrl =  `${url}/countries/${country}`
     }

    try{
        const response = await fetch(updatedUrl)
        const {confirmed,recovered,deaths,countries} = await response.json();
        //const data = await response.json()

        const updatedData = {
            confirmed,
            recovered,
            deaths,
            countries
        }
        //console.log(updatedData)
        return updatedData
    

    }catch(error){
        return error
    }
}



export default fetchData