import Details from "./details"
import { useState } from "react"
const Show = ({country})=> { 
    const [show,setShow] = useState(false)
    const handleclick = ()=> { 
        setShow(!show)
    }
    
    return ( 
        <>
        <button onClick={handleclick}>{show?' Hide' : 'Show'}</button>
        {console.log(country)}
        {show && <Details country={[country]} /> }
        </>
    )
}
export default Show