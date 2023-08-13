import {ip} from "./userService";



export const getChatsByUserId = async (id)=> {
    const response =  await fetch(`${ip}/conversations?id=${id}`,  {
        method: 'GET',
        headers: new Headers({ 'Content-type': 'application/json' })

    })

    return await response.json();
};

export const createMessage = async (message: any) => {
    const response = await fetch(`${ip}/message`, {
        method: "POST",
        headers: new Headers({ 'Content-type': 'application/json' }),
        body: JSON.stringify(message)
    });

    return await response.json();
}