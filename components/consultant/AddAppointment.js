import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import { CardActions } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Card } from "@material-ui/core";
import axios from "axios";
import EventIcon from '@material-ui/icons/Event';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import ViewSchedule from './ViewSchedule'

const useStyles = makeStyles((theme) => ({
  link: {
    display: 'flex',
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));
const AddAppointment = (props) =>{
    
  const [subject,setSubject] = useState('');
  const [date,setDate] = useState('');
  const [startTime,setStartTime] = useState('');
  const [endTime,setEndTime] = useState('');
  const classes = useStyles();

  console.log("Add appointment",props.userDetail)

  const submitRequest = async (subject,date,startTime,endTime) => {

      {console.log(date+"T"+startTime)}
      {console.log(date+"T"+endTime)}
    const data={
      consultantId:props.userDetail.id,
      subject:subject,
      startDate:date+"T"+startTime,
      endDate: date+"T"+endTime
    }
    axios.post("http://localhost:3000/api/schedule",data)
    .then(res=>console.log(res.data))
    
    //clearing fields after submitting request
    subjectId.value="";
    dateId.value="";
    stimeId.value="";
    etimeId.value="";


  }
    return(
        <> 
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="textPrimary" className={classes.link}>   
                        <HomeIcon className={classes.icon} />
                        Dashboard
                </Typography>    
                    <Typography color="textPrimary" className={classes.link}
                        color="inherit"
                        href="/getting-started/installation/"                       
                        className={classes.link}
                    >
                        <EventIcon className={classes.icon} />
                        Schedule Appointment
                        </Typography>
                    
            </Breadcrumbs>
        <Grid container>
          <Grid item md={6} xs={6}>
          
        <Paper elevation={3} style={{marginTop:"20px"}} >  
        <form  noValidate autoComplete="off" style={{padding:'30px'}}>
        
        <Typography component="p" variant="h5" color="primary">Schedule an Appointment</Typography>
        <TextField
            id="subjectId"
            label="Subject"
            fullWidth
            value={subject}
            onChange={(e)=>{setSubject(e.target.value)}}
            style={{ marginTop: '30px' }}
            size="small"          
            variant="outlined"
            />
          
            <TextField
            id="dateId"
            label="Appointment Date"
            type="date"
            // defaultValue="2017-05-24"
            value={date}
            onChange={(e)=>{setDate(e.target.value)}}
            fullWidth
            style={{marginTop:'15px'}}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Grid container>
            <Grid item xs={6}>
          <TextField
            id="stimeId"
            label="Start Time"
            type="time"
            // defaultValue="07:30"
            fullWidth
            value={startTime}
            onChange={(e)=>{setStartTime(e.target.value)}}
            style={{marginTop:'15px'}}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          </Grid>
          <Grid item xs={6}>         
           <TextField
            id="etimeId"
            label="End Time"
            type="time"
            // defaultValue="07:30"
            fullWidth
            value={endTime}
            onChange={(e)=>{setEndTime(e.target.value)}}
            style={{marginTop:'15px',marginLeft:'10px'}}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          </Grid>

        </Grid>
      
      {console.log(date+"T"+startTime)}
      {console.log(date+"T"+endTime)}
        <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "15px" }}
            onClick={() => submitRequest(subject,date,startTime,endTime)}
           
            fullWidth
          >
            Submit
          </Button>
       </form>   
       
        </Paper>
            </Grid>
            <Grid item md={1} ></Grid>
          <Grid item md={6} xs={8}>
              {/* <ViewSchedule userId={props.userDetail} /> */}
          </Grid>

        </Grid>
        </>
    )
}

export default AddAppointment;
