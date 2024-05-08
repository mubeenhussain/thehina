import React, { useState } from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const specs = [
    {
      value: 'psychiatrist',
      label: 'Psychiatrist',
    },
    {
      value: 'cardiologist',
      label: 'Cardiologist',
    },
    {
        value:'dermatologist',
        label: 'Dermatologist',
    },
    {
        value: 'radiologist',
        label: 'Radiologist',
    },
    
    {
        value: 'neurologist',
        label: 'Neurologist',
    },

  ];

  const status = [
    
    {
        value: 'yes',
        label: 'Yes',
    },
    
    {
        value: 'no',
        label: 'No',
    },

  ];

const EditUser = () =>{

return(
        <>
    <Card style={{padding:'40px',border:'1px solid #DADCE0'}} >
      <Typography variant="h5" component="h2" style={{marginBottom:"20px"}} color="primary"  >Update User Detail</Typography>
      <form  noValidate autoComplete="off">
       
        
        <FormControl fullWidth >
          <InputLabel htmlFor="username">Name</InputLabel>
          <Input
            fullWidth
            id="username"          
            
          />
        </FormControl>
        <FormControl fullWidth >
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            type="email"
            
          />
        </FormControl>
       
       <FormControl fullWidth>
        <TextField
          id="standard-select-currency"
          select
          label="Select Speciality"         
          
        >
          {specs.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>     
        
        <FormControl fullWidth>
        <TextField
          id="standard-select-currency"
          select
          label="Select Status"         
          
        >
          {status.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </FormControl>  
        <Button style={{marginTop:'20px'}} color="primary" variant="contained" size="medium" fullWidth>Update</Button>  
        </form>  
       
      
    </Card>
    </>
    )
}

export default EditUser;