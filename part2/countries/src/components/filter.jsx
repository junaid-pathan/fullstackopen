const Filter = ({change,filtervalues}) => { 
    return ( 
        <div> 
            find countries <input value={change} onChange={filtervalues}/>
        </div>
    )
}

export default Filter