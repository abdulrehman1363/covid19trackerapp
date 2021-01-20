const url = "https://covid19.mathdro.id/api"

const fetchDaily = async () => {
    try{
        const response = await fetch(`${url}/daily`)
        const data = await response.json()
        
        const updatedData =  data.map((dailyData) => ({
            confirmed : dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        console.log(updatedData)
        return updatedData
    }catch(error){
        console.log(error)
    }
}

export default fetchDaily