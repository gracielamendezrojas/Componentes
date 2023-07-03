import '../Styles/LogIn.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Header from '../Components/Header';
import {useForm} from "react-hook-form";
import {useState} from "react";
import {Stack} from "@mui/material";
import {getUserByEmailAndPassword} from "../Services/userService";
import Link from "@mui/material/Link";

const wTheme = createTheme({
  palette: {
    primary:{
      main: '#ffffff'
    },
    text:{
      primary: '#ffffff'
    }
  }
});

export default function LogIn () {
  const {register, handleSubmit, formState : {errors, isValid}} = useForm({mode: 'onChange'});


  const formSubmitLogIn = async (data: any) => {

    if(isValid) {
      const logInResponse = await getUserByEmailAndPassword(data.email, data.password);
       if(logInResponse.token){
          document.cookie = `token=${logInResponse.token}`
         alert("main module")
       }else{
         alert("user does not exist")
       }
    }

  }

  return <>
    <div className="App">
      <Header></Header>
        <div className={"cont-main"}>
          <div className={"cont"}>
            <Typography variant="h5" className='color-white'>
            Log in
            </Typography>
          </div>
          <form onSubmit={handleSubmit(formSubmitLogIn)}>
            <div className={"cont-login"}>
              <ThemeProvider theme={wTheme}>
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
                    {...register("password", {required:true})}
                    error={!!errors.password}
                    helperText={errors.password && "this field is required!"}
                />

                </Stack>

              </ThemeProvider>

            </div>

            <Link href="/register" underline="hover" >
              {<Typography variant="h6"  className='color-white'>
                Don´t have an account? Register here
              </Typography>}
            </Link>

            <ThemeProvider theme={wTheme}>
            <Button  variant="contained"  type={"submit"}>
              <Typography variant="h5" className='color-purple'>
                Log in
              </Typography>
            </Button>
            </ThemeProvider>
          </form>
        </div>

    </div>
  </>
}