import Details from "./details"
const Display = ({filteredcountry}) => { 

    if (filteredcountry.length === 0) { 
      return <p>No countries Found</p>
    }
    else if (filteredcountry.length>10){ 
      return <p>Too many matches</p>
    }
    else if (filteredcountry.length===1){ 
        return <Details country = {filteredcountry} />
    }
    else{ 
        return (
            filteredcountry.map(country=><p key={filteredcountry.fifa}>{country.name.common}</p>)
        )
    }
  }

  export default Display