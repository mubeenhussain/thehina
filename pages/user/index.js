import Head from "next/head";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import CardActions from "@material-ui/core/CardActions";
import axios from 'axios'
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as actions from "../../redux-thunk/actions";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Nav from "../../components/Nav";


import {parseCookies} from 'nookies'
import jwt_decode from "jwt-decode";

const bookConsultation = ({userDetail}) => {
  
  const router = useRouter();
  const id = router.query.id; 
  const startDate =router.query.start;
  const endDate = router.query.end;
  const [userName,setUserName] = useState(userDetail.name);
  const [email,setEmail] = useState(userDetail.email);
  const [aim,setAim] = useState("");

  // console.log("consultant object id ",id,"start date",startDate,"end date ",endDate);
  // console.log("name",userDetail.name,"email",userDetail.email,"role",userDetail.role);

  const  submit = ()=>{
    console.log("user id",userDetail.id);
    console.log(startDate,endDate)
    const clientData = {
      clientId:userDetail.id,
      name:userName,
      email:email,
      aim:aim
    }
    const consultantData={
      consultantId:id,
      name:"",
      email:""
    }
    const data = {
      
      clientData,
      consultantData,
      startDate:startDate,
      endDate:endDate,
    
    }
   axios.post(`http://localhost:3000/api/appointment`,data)
    .then(res=>{
     console.log("response",res.data)
    })
  }

  
 
  // console.log("consultant data",consultantData);
  // console.log("User Detail",userDetail)
  return (
    <>
      <div>
        <Head>
          <title>Appointment</title>
        </Head>
      </div>
      <Grid container>
        <Nav />
        <Grid item xs={4} md={4}></Grid>

        <Grid item md={4} xs={4} style={{ marginTop: "50px" }}>
          <Card style={{ padding: "20px", border: "1px solid #DADCE0" }}>
            <Typography align="center">
              <img src="/logo.png" width={200} height={150} />
            </Typography>
            <Typography
              variant="h4"
              component="h2"
              style={{ marginBottom: "10px", marginTop: "-20px" }}
              align="center"
              color="primary"
            >
              Book appointment
            </Typography>

            <form noValidate autoComplete="off" style={{ padding: "20px" }}>
              <TextField
                id="username"
                label="User Name"
                type="text"
                fullWidth
                style={{ marginTop: "10px" }}
                value={userName}
                onChange={(e)=>setUserName(e.target.value)}
                autoComplete="current-username"
                variant="outlined"
              />

              {/* <TextField
                id="email"
                label="National Id#"
                type="email"
                fullWidth
                value={userDetail.email}
                style={{ marginTop: "10px" }}
                size="small"
                autoComplete="current-email"
                variant="outlined"
              /> */}

              <TextField
                id="email"
                type="email"
                label="Email"
                fullWidth
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                style={{ marginTop: "10px" }}
                size="small"
                
                variant="outlined"
              />

              <TextField
                id="aim"
                
                label="Aim of Consultation"
                fullWidth
                style={{ marginTop: "10px" }}
                value={aim}
                onChange={(e)=>setAim(e.target.value)}
                autoComplete="current-password"
                variant="outlined"
              />
            </form>
            <CardActions style={{ justifyContent: "center", padding: "20px" }}>
              <Button
                variant="contained"
                style={{ backgroundColor: "#D07BCB", color: "white" }}
                fullWidth
                onClick={() => submit()}
              >
                Book Appointment
              </Button>
            </CardActions>
            <CardActions style={{ justifyContent: "center" }}>
              <Button
                color="primary"
                // style={{ marginTop: "12px" }}
                onClick={() => router.push("/login")}
              >
                Back
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={4}></Grid>
      </Grid>
    </>
  );
};

export default bookConsultation;


bookConsultation.getInitialProps = (ctx)=>{
  try{
    const cookie = parseCookies(ctx);
      // const user = cookie.User?"Admin":"";
      const decoded = jwt_decode(cookie.Token);
      console.log("decoder",decoded.role)
      const role = decoded.role;
      if(role !== 'User' ){
        //as token is valid but when user use a valid token then this condition will
        //check whether decrypted token contain admin as a role otherwise redirect to login page
        console.log("user as a role condition works=> not User")
        const {res} = ctx;
        res.writeHead(302,{Location:"/"})
        res.end()
      }

      return{
        userDetail: decoded
      }
  
      
      }
      catch(err){
        //it handles invalid token error 
        //when token is remove or invalid then it redirect to login page
        // console.log(err)
        const {res} = ctx;
        res.writeHead(302,{Location:"/"})
        res.end()
      }

      
}
