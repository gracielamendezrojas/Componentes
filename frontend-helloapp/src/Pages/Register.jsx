import '../Styles/Register.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';
import hiImage from "../Images/HiImage.png";
import {useForm} from "react-hook-form";
import {registerUser} from "../Services/userService";
import Header from "../Components/Header";
import {useState} from "react";
import Input from '@mui/material/Input';


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


export default function Register() {
    const {register, handleSubmit, formState : {errors, isValid}} = useForm({mode: 'onChange'});
    const {showPassword, setShowPassword} = useState(false);

    /**const formSubmitRegister = async (data: any) => {
        if(isValid) {
            const RegisterResponse = await registerUser(data.name, data.lastName, data.nickName, data.email, data.password);
            if(RegisterResponse){
                alert("register successful");
                window.location.href = "/login"; 
            }
        }
    }*/

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

    const formSubmitRegister = async (data: any) => {
        if(isValid) {

            let file = document.getElementById('avatar').files[0];

            toBase64(file, async (fileAsBase64) => {
                const RegisterResponse = await registerUser(data.name, data.lastName, data.nickName, data.email, data.password, fileAsBase64);
                if(RegisterResponse){
                    alert("register successful");
                    window.location.href = "/login";
                }
            })
        }
    }

    //const inputImage = useRef(null); 
    /**
     *     const [imageUrl, setImageUrl] = useState(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

     */





    return <>
        <div className="App">
            <Header/>

            <form onSubmit={handleSubmit(formSubmitRegister)} className='flexContainer flexCenter b-color-purple padding'>
                <div className='b-color-purple dimensions'>
                </div>

                <div className = 'flexColumn flexSpaceEvenly dimensions  borderRadius b-color-white'>

                        <Typography variant="h5" className='color-purple'>
                            Register
                        </Typography>
                        <img src={hiImage}  className='HiImageR' alt="HelloApp Image"/>
                        <ThemeProvider theme={pTheme}>
                            <TextField
                                id="name"
                                required label="First Name"
                                variant="standard"  focused
                                {...register("name", {required:true})}
                                error={!!errors.name}
                                helperText={errors.name && "this field is required!"}
                            />

                            <TextField
                                id="lastName"
                                required label="Last Name"
                                variant="standard"  focused
                                {...register("lastName", {required:true})}
                                error={!!errors.lastName}
                                helperText={errors.lastName && "this field is required!"}
                            />

                            <TextField
                                id="nickName"
                                required label="Nickname"
                                variant="standard"  focused
                                {...register("nickName", {required:true})}
                                error={!!errors.nickName}
                                helperText={errors.nickName && "this field is required!"}
                            />

                            <TextField
                                id="email"
                                required label="email"
                                variant="standard" focused
                                {...register("email", {required:true})}
                                error={!!errors.email}
                                helperText={errors.email && "this field is required!"}
                            />

                            <TextField
                                id="password"
                                required label="Password"
                                variant="standard" focused
                                type={showPassword ? "text" : "password"}
                                {...register("password", {required:true})}
                                error={!!errors.password}
                                helperText={errors.password && "this field is required!"}
                            />

                            <Input
                                id="avatar"

                                variant="standard" focused
                                type={"file"} 
                                {...register("inputAvatar", {required:true})}
                                error={!!errors.avatar}
                                helperText={errors.avatar && "avatar is required!"}
                            />

                            <Button  variant="contained" type={"submit"}>
                                <Typography variant="h5" className='color-white' >
                                    Register
                                </Typography>
                            </Button>
                        </ThemeProvider>
                </div>
                <div className='b-color-purple dimensions'></div>
            </form>
        </div>
    </>
}