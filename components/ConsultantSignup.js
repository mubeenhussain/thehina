import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CardActions from '@material-ui/core/CardActions';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import * as actions from "../redux-thunk/actions";
import { useRouter } from "next/router";
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(2),
      width: "25ch",
    },
    margin: {
        margin: theme.spacing(1),
      },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));





const ConsultantSignup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();

  const submitSignup = async (name,arabicName,email,password,mainDomain,summaryOfExpertise,hourPrice,phoneNumber,idNumber,idType,region,gender,IBAN,dateOfBirth,role)=>{
    dispatch(actions.signup({name,arabicName,email,password,mainDomain,summaryOfExpertise,hourPrice,phoneNumber,idNumber,idType,region,gender,IBAN,dateOfBirth,image,role }))
      .then((response) => {
        console.log("Consultant signup Response: ", response);
        router.push("/consultant");
      })
      .catch((error) => {
        console.log("SignUp Error: ", error);
      });
  };
  
  const [idType, setIdType] = useState('');
  const [IBAN, setIban] = useState('');

  const [idNumber, setIdNumber] = useState('');
  const [name, setName] = useState("");
  const [arabicName, setArabicName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mainDomain, setMainDomain] = useState("");
  const [hourPrice, setHourPrice] = useState("");
  const [summaryOfExpertise, setSummaryOfExpertise] = useState("");
  const [image, setImage] = useState("");
  const [region, setRegion] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState("");


  return (
    <>
  
      <Card style={{padding:'20px',border:'1px solid #DADCE0'}} >
      <Typography   align="center" >
        <img        
        src="/logo.png"
        width={200} 
        height={150}
      />
      </Typography>
      <Typography
          variant="h5"
          component="h2"
          style={{ marginBottom: "10px",marginTop:'-20px' }}
          align="center"
          color="primary"
        >
          Create your Consultant Account
        </Typography>


        <Grid container  spacing={2} style={{padding:"30px"}} >
      {/* <form  noValidate autoComplete="off"  style={{padding:'20px'}}> */}
     
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
            {console.log(dateOfBirth)}
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

         

        <Grid item md={6}>  
            <TextField        
                label="Main Domain"
                type="text"
                fullWidth
                style={{marginTop:"10px"}}
                size="small"
                variant="outlined"
                value={mainDomain}
                onChange={e=>{setMainDomain(e.target.value)}}
              />    
        </Grid>
      

        <Grid item md={6}> 
            <TextField
                    
                label="Hour Price"
                type="text"
                fullWidth
                style={{marginTop:"10px"}}
                size="small"         
                variant="outlined"
                value={hourPrice}
                onChange={e=>{setHourPrice(e.target.value)}}
              />   
        </Grid>
        
        <Grid item md={12}>
            <TextField
                        
                label="Summary of Expertise"
                type="text"
                fullWidth
                style={{marginTop:"10px"}}
                size="small"
                autoComplete="fullName"             
                value={summaryOfExpertise}
                onChange={e=>{setSummaryOfExpertise(e.target.value)}}
                variant="outlined"
              />
        </Grid>     
        <Grid item md={10}>
                <TextField
                            label="Bank IBAN"
                            type="text"
                            value={IBAN}
                            onChange={e=>{setIban(e.target.value)}}
                            fullWidth
                            style={{marginTop:"10px"}}
                            size="small"
                            variant="outlined"
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
              
            <Grid item md={12}>
             
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
                <Button variant="contained" color="primary" style={{ marginTop: '15px' }} component="span"  >
                  Upload
                </Button>
              </label>
            </Grid>

            {/* </form> */}
       
      
       
       
        
       <Grid item md={12}>
      <CardActions style={{justifyContent:'center',padding:'20px'}}>  
      <Button
            color="primary"
            variant="contained" 
            fullWidth
            // onClick={() => submitSignup(userName, email, password,type,"Consultant")}
            onClick={() => submitSignup(name,arabicName,email,password,mainDomain,summaryOfExpertise,hourPrice,phoneNumber,idNumber,idType,region,gender,IBAN,dateOfBirth,"Consultant")}
          >     
        Sign Up
      </Button>
      </CardActions>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
            
            color="primary"
            style={{ marginTop: "12px" }}
            onClick={() => router.push("/login")}
          >
            Already have an account?
          </Button>
        </CardActions>
      </Grid>
        </Grid>
     </Card>
    
    
    </>
  );
};

export default ConsultantSignup;