import Details from "./details"
import Show from "./show"
const Display = ({filteredcountry}) => { 

    if (filteredcountry.length === 0) { 
      return <p>No countries found</p>
    }
    else if (filteredcountry.length>10){ 
      return <p>Too many matches</p>
    }
    else if (filteredcountry.length===1){ 
        return <Details country = {filteredcountry} />
    }
    else{ 
        return (
            filteredcountry.map(country=>{
              return(
              <>
              <p className="country" key={filteredcountry.fifa}>{country.name.common}</p><Show country={country} />
              </>
            )}
          ))}
}

  export default Display