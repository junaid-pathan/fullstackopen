import axios from 'axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    important: true,
  }
  console.log(request)
  return request.then(response => {
    const modifiedData = response.data.concat(nonExisting)
    console.log(modifiedData)
    return modifiedData 
})

}
// first you get the whole promise in request
 //after getting the whole promise u just return data part of it 
const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}
export default { getAll,create,update} 