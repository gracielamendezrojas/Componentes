//export const ip = "http://3.131.37.199";
export const ip = "http://localhost:5001";


export const getUserByEmailAndPassword = async (email, password)=> {
    const response =  await fetch(`${ip}/login?email=${email}&password=${password}`,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

   return await response.json();
};


export const setUser = async (firstname, lastname, nickname, email, password)=> {
    const response =  await fetch(`${ip}/register?name=${firstname}&lastname=${lastname}&nickname=${nickname}&email=${email}&password=${password}`,  {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

    return await response.json();
};

export const setUserWNickName = async (firstname, lastname, nickname, email, password)=> {
    const response =  await fetch(`${ip}/login?email=${email}&password=${password}`,  {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

    return await response.json();
};