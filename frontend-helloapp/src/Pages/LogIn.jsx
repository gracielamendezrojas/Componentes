import '../Styles/LogIn.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {createMuiTheme, ThemeProvider} from '@mui/material/styles';
import Header from '../Components/Header';
import {useForm} from "react-hook-form";
import {InputAdornment, Stack} from "@mui/material";
import {getUserByEmailAndPassword} from "../Services/userService";
import Link from "@mui/material/Link";
import hiImage from "../Images/HiImage.png";
import {useState} from "react";


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

export default function LogIn () {
  const {register, handleSubmit, formState : {errors, isValid}} = useForm({mode: 'onChange'});
  const {showPassword, setShowPassword} = useState(false);

  const formSubmitLogIn = async (data: any) => {

    if(isValid) {
      const logInResponse = await getUserByEmailAndPassword(data.email, data.password);
      if(logInResponse.token){
          document.cookie = `token=${logInResponse.token}`;
          localStorage.setItem("avatar", logInResponse.avatar);
          window.location.href = "/chats"; 
       }else{
         alert("user does not exist"); 
       }
    }

  }

  return <>
    <div className="App">
      <Header/>
      <form className='flexContainer flexCenter b-color-purple padd size' onSubmit={handleSubmit(formSubmitLogIn)}>
        <div className={"cont-main"}>
          <div className={"cont"}>
            <div className='margin'> 
              <Typography variant="h5" className='color-purple padding'>
                Login 
              </Typography>
            </div>
            <img src={hiImage}  className='HiImageL' alt="HelloApp Image"/>
              <ThemeProvider theme={pTheme}>
                <Stack className={"cont-text"} spacing={5}>
                <TextField
                    id="email"
                    required label="Email"
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
                </Stack>
              </ThemeProvider>

            </div>

            <Link href="/register" underline="hover" >
              {<Typography variant="h6"  className='color-purple '>
                Don´t have an account? Register here
              </Typography>}
            </Link>
            <div className='margin'>
              <ThemeProvider theme={pTheme}>
              <Button  variant="contained"  type={"submit"} >
                <Typography variant="h5" className='color-white '>
                  Log in
                </Typography>
              </Button>
              </ThemeProvider>
            </div>

        </div>
        </form>
    </div>
  </>
}


