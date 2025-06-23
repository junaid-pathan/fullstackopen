import axios from 'axios'
import { useEffect,useState} from 'react'
import Filter from './components/filter'
import Display from './components/display'
const App =() => { 
  const [change,setChange]=useState("")
  const [countries,setCountries]=useState([])
  const baseURL = "https://studies.cs.helsinki.fi/restcountries/api"
  const filterchange = (event) => { 
    // console.log(event.target.value)
    setChange(event.target.value)
  }

  const hook = () => { 
    axios 
      .get(`${baseURL}/all`)
      .then(response=>{ 
        setCountries(response.data)
        // console.log(countries)
      }
      )
    
  }
  useEffect(hook,[])
  // console.log(change)
  const filteredcountry = change==='' ? []:countries.filter(country=>country.name.common.toLowerCase().includes(change.toLowerCase()))
  console.log(filteredcountry)
// filtered country has [{data of one country}]
  // console.log(filteredcountry)
  return (
  <div> 
    <Filter change={change} filtervalues={filterchange} />
    <div className='list'> 
      <Display filteredcountry={filteredcountry} />
    </div>
  </div>
)
}

export default App