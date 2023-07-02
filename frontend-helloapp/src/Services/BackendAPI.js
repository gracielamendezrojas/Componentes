const getHolaMundo = async ()=> {
    const url = 'http://3.19.219.97/hola-mundo';
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