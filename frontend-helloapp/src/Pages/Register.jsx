import '../Styles/Register.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';
import homeImage from "../Images/chatimage.jpg";
import hiImage from "../Images/HiImage.png";
import {useForm} from "react-hook-form";
import {getUserByEmailAndPassword, setUser} from "../Services/userService";
import Header from "../Components/Header";


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

    const formSubmitRegister = async (data: any) => {
        if(isValid) {
            const RegisterResponse = await setUser(data);
            if(RegisterResponse){
                //alert("main module"); 
                window.location.href = "/login"; 
            }else{
                alert("couldn´t register")
            }
        }
    }

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
                                id="firstname"
                                required label="First Name"
                                variant="standard"  focused
                                {...register("firstname", {required:true})}
                                error={!!errors.fname}
                                helperText={errors.fname && "this field is required!"}
                            />

                            <TextField
                                id="lastname"
                                required label="Last Name"
                                variant="standard"  focused
                                {...register("lastname", {required:true})}
                                error={!!errors.lname}
                                helperText={errors.lname && "this field is required!"}
                            />

                            <TextField
                                id="nickname"
                                label="Nickname"
                                variant="standard" focused
                                {...register("nickname", {required:false})}
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
                                {...register("password", {required:true})}
                                error={!!errors.password}
                                helperText={errors.password && "this field is required!"}
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