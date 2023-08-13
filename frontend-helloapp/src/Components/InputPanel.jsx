import React from 'react'; 
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useForm} from "react-hook-form";
import {createMessage} from "../Services/chatService";
import {getCookieValue} from "../Services/utils";
import {parseJwt} from "../Services/jwt";

const InputPanel = (conversationProp: {chat: any, onMessageSent:(message) => void}) => {
    const {register, handleSubmit, formState : {errors, isValid}, reset} = useForm({mode: 'onChange'});
    const userInfo = getCookieValue('token');
    const decode =  parseJwt(userInfo);

    const submit = async  (data: any) => {
        if(isValid){
            const toMessage = decode.id === conversationProp.chat.to
                ? conversationProp.chat.from
                : conversationProp.chat.to;

            const message = {
                from: decode.id,
                to: toMessage,
                message: data.content,
                idConversation: conversationProp.chat.id
            }

           const newMessage = await createMessage(message);
            conversationProp.onMessageSent(newMessage)
            reset()
        }
    }

    return <>
        <div className='inputPanel'>
        <form onSubmit={handleSubmit(submit)} >
            <input className= "input"
                   type= 'text'
                   placeholder='Type...'
                   id="content"
                   required
                   {...register("content", {required:true})}
            ></input>
            <div className='flex small_gap'>
                <Button  variant="contained"  type={"submit"} >
                    <Typography variant="h8" className='color-white send_button'>
                        Send
                    </Typography>
                </Button>
            </div>
        </form>

    </div>
    </>
}

export default InputPanel