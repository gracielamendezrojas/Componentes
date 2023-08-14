
export const ip = "http://3.144.127.183";

//export const ip = "http://localhost:5005";


export const getUserByEmailAndPassword = async (email, password)=> {
    const response =  await fetch(`${ip}/login?email=${email}&password=${password}`,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

   return await response.json();
};



export const registerUserOLD = async (name, lastname, nickname, email, password)=> {
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


export const registerUser = async (name, lastname, nickname, email, password, image)=> {
    let formData = new FormData();
    formData.append("firstName", name);
    formData.append("lastName", lastname);
    formData.append("nickName", nickname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", image);

    const response =  await fetch(`${ip}/register`,  {
        method: 'POST',
        headers: new Headers({ 'Content-type': 'multipart/form-data' }),
        body: formData
    })

   return await response.json();
};

export const updateUser = async (name, lastname, nickname, image, token)=> {
    let formData = new FormData();
    formData.append("firstName", name);
    formData.append("lastName", lastname);
    formData.append("nickName", nickname);
    if(!!image) {
        formData.append("avatar", image);
    }
   

    const response =  await fetch(`${ip}/users`,  {
        method: 'PUT',
        headers: new Headers({'x-token':token }),
        body: formData
    })

   return await response.json();
};


