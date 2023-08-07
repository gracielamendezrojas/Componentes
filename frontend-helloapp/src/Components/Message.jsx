import React from 'react'
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";

const Message = (messageProps: {content: string, to: number, toPhoto: JSX.Element, myPhoto: JSX.Element, date: string}) => {
    const token = getCookieValue('token');
    const decode = parseJwt(token);

    const messageClass = decode.id === messageProps.to ? "message owner" : "message";

    return <>
        <div className={messageClass}>
            <div className="messageInfo">
                {decode.id === messageProps.to ? messageProps.myPhoto : messageProps.toPhoto}
            </div>
            <div className="messageContent">
                <p className='paragraph_owner'>{messageProps.content}</p>
            </div>
        </div>

    </>
}

export default Message