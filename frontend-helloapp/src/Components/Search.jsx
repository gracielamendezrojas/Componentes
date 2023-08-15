import React, {useState} from 'react'
import avatar from "../Images/avatar.jpeg";
interface props{
    returnTerm? : (term : string) => void;
}

const Search = ({returnTerm} : props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        returnTerm(searchTerm)
    }

    return (
        <div className = 'search'> 
            <div className='searchForm'> 
                <input className= 'input' type='text' placeholder='Find...' onChange={handleSearch} style={{color:"Black"}}/>
            </div>
        </div>
    )
}

export default Search