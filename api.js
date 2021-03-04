import axios from 'axios'

export async function callApi(){
  const api =  await axios.get(`http://localhost:3001/events`)
  console.log(api)
  return api
}