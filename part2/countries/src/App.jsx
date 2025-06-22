import axios from 'axios'
import { useEffect,useState} from 'react'
import Filter from './components/filter'
const App =() => { 
  const [change,setChange]=useState("")
  const [countries,setCountries]=useState([])
  const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/all"
  const filterchange = (event) => { 
    console.log(event.target.value)
    setChange(event.target.value)
  }

  const hook = () => { 
    axios 
      .get(baseURL)
      .then(response=>{ 
        response.data
        console.log(response.data[0].name.common)}
      )
    
  }

  useEffect(hook,[])
  // console.log(change)
  const filteredcountry = countries.filter(country=>country.common.toLowerCase().includes(change.toLowerCase()))
  // console.log(filteredcountry)
  return (
  <div> 
    <Filter change={change} filtervalues={filterchange} />
    <div> 
      {filteredcountry.length>10? <p>Too many matches </p>:filteredcountry.map(country=><p>{country.common}</p>)}
    </div>
  </div>
)
}

export default App