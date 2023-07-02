const getHolaMundo = async ()=> {
    const url = 'http://3.144.102.187/hola-mundo';
    const token = localStorage.getItem("token")
    const response =  await fetch(url,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json', authorization: `Bearer ${token}` })
        //,mode: 'no-cors'
        })
    console.log(response); 
    const jsonData = await response.json();
    console.log(jsonData); 
}

export default getHolaMundo; 