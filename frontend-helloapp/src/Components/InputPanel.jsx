import React from 'react'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img from '../Images/img.png'; 
import Attach from '../Images/attach.png'; 

const InputPanel = () => {
    return (
        <div className='inputPanel'>
            <input className= "input" type= 'text' placeholder='Type...'></input>
            <div className='flex small_gap'>
                <img className= "img_input" src = {Attach} alt= ""/>
                <input type = "file"  style={{display:"none"}} id="file"/>
                <label htmlFor="file">
                    <img className= "img_input" src = {Img} alt= ""/>
                </label>
                <Button  variant="contained"  type={"submit"} >
                    <Typography variant="h8" className='color-white send_button'>
                        Send
                    </Typography>
                </Button>
            </div>
        </div>
    )
}

export default InputPanel