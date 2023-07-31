import {ip} from "./userService";


export const getChatsByUserId = async (id)=> {
    const response =  await fetch(`${ip}/conversations?id=${id}`,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

    return await response.json();
};