import '../Styles/Profile.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';
import hiImage from "../Images/HiImage.png";
import {updateUser} from "../Services/userService";
import {useState} from "react";
import Input from '@mui/material/Input';
import {parseJwt} from "../Services/jwt";
import {getCookieValue} from "../Services/utils";



const pTheme = createMuiTheme({
    palette: {
        primary:{
            main: '#97A7CF'
        },
        text:{
            primary: '#97A7CF'
        }
    }
});


const toBase64 = (file, callback) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        callback(reader.result)
    };
    reader.onerror = function (error) {
        console.error('Error: ', error);
    };
}


function Profile() {
    const userInfo = getCookieValue('token');
    const parseUserInfo = parseJwt(userInfo); 
    const [firstName, setFirstName] = useState(parseUserInfo.firstName); 
    const [lastName, setLastName] = useState(parseUserInfo.lastName); 
    const [nickName, setNickName] = useState(parseUserInfo.nickName); 

    const firstNameHandler = (event) =>{setFirstName(event.target.value)}
    const lasNameHandler = (event) =>{setLastName(event.target.value)}
    const nickNameHandler = (event) =>{setNickName(event.target.value)}

    const submitUpdate = async (event) => {
        event.preventDefault(); 
        

        let file = document.getElementById('avatar').files[0];

        toBase64(file, async (fileAsBase64) => {           
            let response = await updateUser(firstName, lastName, nickName, fileAsBase64, userInfo);

            if(response){
                document.cookie = `token=${response.token}`;
                localStorage.removeItem("avatar"); 
                localStorage.setItem("avatar", response.avatar);
                window.location.href = "/chats"; 
            }
        })

    }


    return (
        <div className="Update">

            <form onSubmit={submitUpdate} className='flexContainer flexCenter b-color-purple padding'>
                <div className='b-color-purple dimensions'>
                </div>

                <div className = 'flexColumn flexSpaceEvenly dimensions  borderRadius b-color-white'>

                    <Typography variant="h5" className='color-purple'>
                        Profile
                    </Typography>
                    <img src={hiImage}  className='HiImageR' alt="HelloApp Image"/>
                    <ThemeProvider theme={pTheme}>
                        <TextField
                            id="name"
                            required label="First Name"
                            variant="standard"  focused
                            value = {firstName}
                            onChange={firstNameHandler}
                        />
                        <TextField
                            id="lastName"
                            required label="Last Name"
                            variant="standard"  focused
                            value = {lastName}
                            onChange={lasNameHandler}
                        />
                        <TextField
                            id="nickName"
                            required label="Nickname"
                            variant="standard"  focused
                            value = {nickName}
                            onChange={nickNameHandler}
                        />
                        <Input
                            id="avatar"
                            required
                            label="Avatar" 
                            variant="standard" focused
                            type={"file"} 
                        />
                        <Button  variant="contained" type={"submit"}>
                            <Typography variant="h5" className='color-white' >
                                Update
                            </Typography>
                        </Button>
                    </ThemeProvider>
                </div>
                <div className='b-color-purple dimensions'></div>
            </form>
        </div>
    );
  }

  export default Profile;