import React from 'react'
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";

const Message = (messageProps: {content: string, to: number, toPhoto: JSX.Element, myPhoto: JSX.Element, date: string}) => {
    const token = getCookieValue('token');
    const decode = parseJwt(token);

    const messageClass = decode.id === messageProps.to ? "message" : "message owner";

    return <>
        <div className={messageClass}>
            <div className="messageInfo">
                {decode.id === messageProps.to ? messageProps.toPhoto : messageProps.myPhoto}
            </div>
            <div className="messageContent">
                <p className='paragraph_owner'>{messageProps.content}</p>
            </div>
        </div>

    </>
}

export default Message