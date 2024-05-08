import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from '@material-ui/core/InputLabel';
import Button from "@material-ui/core/Button";
import * as actions from "../redux-thunk/actions";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { CardActions } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

import { CardContent } from "@material-ui/core";


const Login = () => {
  const dispatch = useDispatch();
  const router = useRouter();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitSignin = async (email, password) => {
    dispatch(actions.login({ email, password }))
      .then((response) => {
        
        console.log(response.role);
        if(response.role==="User"){
          router.push("/consultation");
        }
        else if(response.role==="Consultant"){
          router.push("/consultant");
        }
        else if(response.role==="Admin"){
          router.push("/admin");
        }
        else{
          router.push("/login");
        }
      })
      .catch((error) => {
        console.log("response1");
        console.log("Login Error: ", error);
        
        router.push("/login");
      });
  };

  
  return (
    <>      
     <Card elevation={3} style={{ padding: "20px", border: "1px solid #DADCE0",marginTop:'40px' }}>
       <Typography   align="center" style={{marginBottom:'-40px'}}>
        <img        
        src="/logo.png"
        width={200}
        height={150}
      />
      </Typography>
      <Typography
          variant="h5"
          component="h2"
          style={{ marginBottom: "10px" }}
          align="center"
          color="primary"
        >
         Sign in 
        </Typography>  
       

      <form  noValidate autoComplete="off">
      <TextField
            id="email"
            label="Email"
            fullWidth
           
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            style={{ marginTop: '10px' }}
            size="small"
            autoComplete="current-email"           
            variant="outlined"
            />
        
        <TextField
            id="password"
            label="Password"
            fullWidth
            
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            style={{ marginTop: '10px' }}
            size="small"
            autoComplete="current-password"           
            variant="outlined"
            />
      
      </form>
            
           
            <CardActions style={{justifyContent:'center'}}> 
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "12px" }}
            onClick={() => submitSignin(email, password)}
            size="large"
            fullWidth
          >
            Login
          </Button>
          </CardActions>
         
            
          <CardActions style={{ justifyContent: "center" }}>
            <Button
                
                color="primary"
                style={{ marginTop: "12px" }}
                onClick={() => router.push("/signup")}
              >
                Don't have an account? Sign up.
            </Button>
        </CardActions>
          </Card>
         
          
    </>
  );
};

export default Login;
