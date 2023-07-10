export const ip = "http://3.138.204.126";
//export const ip = "http://localhost:5001";


export const getUserByEmailAndPassword = async (email, password)=> {
    const response =  await fetch(`${ip}/login?email=${email}&password=${password}`,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

   return await response.json();
};


export const registerUser = async (name, lastname, nickname, email, password)=> {
    const response =  await fetch(`${ip}/register`,  {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify({
            name: name,
            lastName: lastname,
            nickName: nickname,
            email: email,
            password: password
        })

    })

    return await response.json();
};
