import React from 'react'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const InputPanel = () => {
    return <>
        <div className='inputPanel'>
        <input className= "input" type= 'text' placeholder='Type...'></input>
        <div className='flex small_gap'>
            <Button  variant="contained"  type={"submit"} >
                <Typography variant="h8" className='color-white send_button'>
                    Send
                </Typography>
            </Button>
        </div>
    </div>
    </>
}

export default InputPanel