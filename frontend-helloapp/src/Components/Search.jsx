import React from 'react'
import avatar from "../Images/avatar.jpeg";


const Search = () => {
    return (
        <div className = 'search'> 
            <div className='searchForm'> 
                <input className= 'input' type='text' placeholder='Find...'/>
            </div>
            <div className='userChat'>
                <img className='imgChat' src={avatar}   alt="avatar"/>
                <div className='userChatInfo'>
                    <span>Name_Chat</span>
                    <p>Hello</p>
                </div>
            </div>
        </div>
    )
}

export default Search