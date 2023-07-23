import React from 'react'
import camera from '../Images/cam.png'
import add from '../Images/add.png'
import more from '../Images/more.png'
import Messages from '../Components/Messages';
import InputPanel from './InputPanel';


const ChatC = () => {
    return (
        <div className='chatC'>
            <div className='chatInfo'>
                <span> Jane</span>
                <div className="chatIcons">
                    <img className= 'img' src={camera} alt='Camera'/>
                    <img className= 'img' src={add} alt='Add'/>
                    <img className= 'img' src={more} alt='More'/>
                </div>
            </div>
            <Messages/>
            <InputPanel/>
        </div>
    )
}

export default ChatC