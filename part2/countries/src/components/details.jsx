const Details = ({country}) => { 
    return( 
        <>
        <h1>{country[0].name.common}</h1>
        <p>Capital : {country[0].capital}</p>
        <p>Area : {country[0].area}</p>
        <h1>Languages</h1>
        <ul>
            {Object.values(country[0].languages).map(language=> { 
                return(
                <li key={language}>{language}</li>
                )
            })}
        </ul>
        <img src={country[0].flags.png}/>
        </>
    )
}
export default Details