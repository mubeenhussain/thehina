import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import Image from 'next/image'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as actions from "../redux-thunk/actions";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import { CardActions, CardContent } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
  },
}));

const UserSignup = () => {
  
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const [idType, setIdType] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [region, setRegion] = useState('');

  const submitSignup = async (idType,idNumber,name, arabicName, email,password,phoneNumber,dateOfBirth,gender,region,role) => {
    // const imageUrl = await imageUpload();
    // console.log("signup block",imageUrl);
    console.log("data",image)

    // const data =  new FormData();
    // data.append('file',image);
    // console.log("data",data)

    dispatch(actions.userSignup({ idType,idNumber,name, arabicName, email,password,phoneNumber,dateOfBirth,gender,region,image,role}))
      .then((response) => {
        console.log("SignUp Response: ", response);
        router.push("/consultation");
      })
      .catch((error) => {
        console.log("SignUp Error: ", error);
      });
  };

  // const imageUpload = async ()=>{
   
   

  //   console.log("data",data)
    
  //   // data.append('upload_preset',"pwstore");
  //   // data.append('cloud_name',"penandweb");
  //   // const response = await axios.post("https://api.cloudinary.com/v1_1/penandweb/image/upload",data)
  
  //   // .then(response=>{
  //   //  console.log("response of image",response.data.secure_url);
  //   // })
  //   // .catch(err=>console.log(err))
  //   // console.log(response.data.secure_url);

  //   // const imgUrl= await response.data.secure_url;
  //   return data;
  
  // }

  return (
    <>
      <Card style={{ padding: "20px", border: "1px solid #DADCE0" }}>
       <Typography   align="center" style={{marginBottom:'-40px'}}>
        <img        
        src="/logo.png"
        width={200}
        height={150}
      />
      </Typography>
        {/* <img
              src="/logo.png"
              style={{marginBottom:'13px',justifyContent:'center'}}
              height="40%"
            /> */}
       
        <Typography
          variant="h5"
          component="h2"
          style={{ marginBottom: "10px" }}
          align="center"
          color="primary"
        >
          Create your TheHina Account
        </Typography>
        <Grid container  spacing={2} style={{padding:"30px"}} >
        <Grid item md={2}>
                <InputLabel htmlFor="idType">Id Type</InputLabel>
                    <Select
                      fullWidth
                      native
                      value={idType}
                      onChange={e=>{setIdType(e.target.value)}}
                    >
                      <option aria-label="None" value="" />
                      <option value={"sId"}>Saudia National Id</option>
                      
                    </Select>
            </Grid>
        
        <Grid item md={10}>
                <TextField
                            label="Id Number"
                            type="text"
                            value={idNumber}
                            onChange={e=>{setIdNumber(e.target.value)}}
                            fullWidth
                            style={{marginTop:"10px"}}
                            size="small"
                            autoComplete="fullName"             
                            variant="outlined"
                />
          </Grid>

          <Grid item  md={6}>
        <TextField          
              label="Full Name in English"
              type="text"
              fullWidth
              style={{marginTop:"10px"}}
              size="small"
              autoComplete="fullName"             
              value={name}
              onChange={(e) => {
              setName(e.target.value);
              }}
              variant="outlined"
            />
        </Grid>

        <Grid item  md={6}>
          <TextField
                label="Full Name in Arabic"
                type="text"
                fullWidth
                style={{marginTop:"10px"}}
                size="small"
                autoComplete="fullName"             
                value={arabicName}
                onChange={(e) => {
                setArabicName(e.target.value);
                }}
                variant="outlined"
              />
        </Grid>
          
           
        
        <Grid item md={6}> 
        <TextField
             label="Email"
             type="email"
             value={email}
             onChange={(e) => {
               setEmail(e.target.value);
             }}
            fullWidth
            style={{ marginTop: '10px' }}
            size="small"
            autoComplete="current-email"           
            variant="outlined"
            />
          </Grid>
         
          
        
        <Grid item md={6}>
            <TextField
              
              type="password"
              label="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              fullWidth
              style={{ marginTop: '10px' }}
              size="small"
              autoComplete="current-password"           
              variant="outlined"
              />
          </Grid>
          <Grid item md={6} style={{ marginTop: '10px' }}>
          <TextField
              id="date"
              label="DOB"
              type="date"
              fullWidth
              defaultValue="2017-05-24"
              
              onChange={e=>setDateOfBirth(e.target.value)}
            />
            {/* {console.log(dateOfBirth)} */}
            </Grid>
          <Grid item md={6} style={{ marginTop: '10px' }}>
            <InputLabel htmlFor="Gender">Gender</InputLabel>
            <Select
              fullWidth
              native
              value={gender}
              onChange={(e)=>{setGender(e.target.value)}}
            >
              <option aria-label="None" value="" />
              <option value={"Male"}>Male</option>
              <option value={"Female"}>Female</option>
            </Select>
            </Grid>

          <Grid item md={12} style={{ marginTop: '10px' }}> 
        <TextField
                     
            label="Mobile Number"
            type="text"
            fullWidth
            style={{marginTop:"10px"}}
            size="small"
            variant="outlined"
            value={phoneNumber}
            onChange={e=>{setPhoneNumber(e.target.value)}}
          /> 
        </Grid>
        <Grid item md={12} style={{ marginTop: '10px' }}>
            <InputLabel htmlFor="region">Region/District Type</InputLabel>
            <Select
              fullWidth
              native
              value={region}
              onChange={(e)=>{setRegion(e.target.value)}}
            >
              <option aria-label="None" value="" />
              <option value={"Riyadh"}>Riyadh</option>
              <option value={"Jeddah"}>Jeddah</option>
              <option value={"Mecca"}>Mecca</option>
              <option value={"Madina Al Monawra"}> Madina Al Monawra </option>
              <option value={"Eastern region"}> Eastern region</option>
              <option value={"Al Qazeem"}>Al Qazeem</option>

             
              <option value={"Aseer, Tabuk"}>Aseer, Tabuk</option>
              <option value={"Hail"}>Hail</option>
              <option value={"Northern Borders"}>Northern Borders</option>
              <option value={"Madina Al Monawra"}>Patio, Jazan</option>
              <option value={"Hoof"}>Hoof</option>
              <option value={"Najran"}>Najran</option>

              <option value={"Outside Saudia Arabia"}>Outside Saudia Arabia</option>
              <option value={"Outside Saudi Arabia"}>Outside Saudi Arabia</option>
              
            </Select>
            </Grid>

            <Grid item md={12} style={{ marginTop: '10px' }}>   
            <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            style={{display:'none'}}
            multiple
            type="file"
            
            onChange={(e) => {
              setImage(e.target.files[0]);
              console.log(e.target.files[0]);
            }}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span"  >
              Upload
            </Button>
          </label>
            </Grid>

            <Grid item md={12}>
            <CardActions style={{justifyContent:'center'}}>
                  <Button
                    variant="contained" color="primary"
                    fullWidth
                    style={{ marginTop: "8px" }}
                    onClick={() => submitSignup(idType,idNumber,name, arabicName, email,password,phoneNumber,dateOfBirth,gender,region,"User")}
                  >
                    Sign Up
                  </Button>
                  </CardActions>
                
                  <CardContent>
                  <Typography variant="body2" gutterBottom style={{color:'#A599B2',marginTop:'-7px'}}>By creating an account, you agree to our Terms & conditions and Privacy policy</Typography>
                  </CardContent>
              
                <CardActions style={{justifyContent:'center'}}>
                <Button
                  variant="outlined" color="primary"
                  fullWidth
                    // style={{ marginTop: "8px" }}
                    onClick={() => router.push("/signup/consultant")}
                  >
                    Register as Consultant
                  </Button>
                </CardActions>
                <CardActions style={{ justifyContent: "center" }}>
                <Button
                    
                    color="primary"
                    style={{ marginTop: "12px" }}
                    onClick={() => router.push("/login", { shallow: true })}
                  >
                    Already have an account?
                </Button>
                </CardActions>

            </Grid>


        </Grid>
        {/* <form noValidate autoComplete="off" style={{padding:'10px'}}>
         
           <TextField
             id="username"
            label="User Name"
            type="text"
            fullWidth
            style={{ marginTop: '10px' }}
            size="small"
            autoComplete="current-username"           
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            variant="outlined"
            />

          
          <TextField
            id="email"
            label="Email"
            type="email"
            fullWidth
            size="small"
            style={{ marginTop: '15px' }}
            autoComplete="current-password"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            variant="outlined"
            />

         

            <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            fullWidth
            size="small"
            style={{ marginTop: '15px' }}
            autoComplete="current-password"
            value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            variant="outlined"
            />
         
         
        </form> */}
       
      </Card>
    </>
  );
};

export default UserSignup;
