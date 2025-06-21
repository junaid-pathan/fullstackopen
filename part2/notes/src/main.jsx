import ReactDOM from 'react-dom/client'
import App from './App'
// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)
// promise.then(response => console.log(response.data[1]))
// better way is 
// axios
//   .get('http://localhost:3001/notes')
//   .then(response=> { 
//     const notes= response.data
//     console.log
//   })

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)