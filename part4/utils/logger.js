const info = (...params) => { 
    console.log(...params)
}

const errors = (...params)=> { 
    console.error(...params)
}

module.exports= {info,errors}