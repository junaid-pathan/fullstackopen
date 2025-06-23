import "../styles/filter.css"
const Filter = ({change,filtervalues}) => { 
    return ( 
        <div className="filter"> 
            <h1>Country Finder</h1>
            <p>Get information about any country !</p>
            <input value={change} onChange={filtervalues}/>
        </div>
    )
}

export default Filter