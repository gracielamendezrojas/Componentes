const getHolaMundo = async ()=> {
    //test
    const url = 'https://www.boredapi.com/api/activity'; 

    //const url = 'http://3.145.3.161/hola-mundo'; 
    const response =  await fetch(url,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })
        //,mode: 'no-cors'
        })
    console.log(response); 
    const jsonData = await response.json();
    console.log(jsonData); 
     
    /** 
    .then((res)=>{
        console.log(res);

        return res.text();
    })
    .then((data)=>{
        console.log(data);
        return new Promise((resolve, reject)=>{
            resolve(data ? JSON.parse(data) : {})
        })
    })
    */

    //const jsonData = await response.json();
    //console.log(jsonData);
}

export default getHolaMundo; 