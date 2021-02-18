export async function callApi(){
  const api =  await fetch(`http://localhost:3001/events`)
  console.log(api)
}