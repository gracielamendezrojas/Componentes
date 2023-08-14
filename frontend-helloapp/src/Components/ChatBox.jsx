import React from 'react'
import Message from './Message'

const Messages = (propsMessages: {messages: [], myPhoto: JSX.Element, toPhoto: JSX.Element}) => {

    return <>
        <div className='messages'>
            {
                propsMessages.messages.map((message) => {
                   return <Message key={message.id} content={message.content} to={message.to} toPhoto={propsMessages.toPhoto} myPhoto={propsMessages.myPhoto} date={message.date} ></Message>
                })
            }
        </div>

    </>
}

export default Messages