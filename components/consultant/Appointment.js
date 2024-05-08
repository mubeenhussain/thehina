import React, {useEffect, useState}  from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import axios  from 'axios'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    //   padding:'20px'
    },
    container:{
        // padding:'50px'
    },
    tbheading:{
        color:'#FFFFFF'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
    link: {
      display: 'flex',
    },
    
  }));
  


const Appointment = (props) =>{
    const classes = useStyles();
    const router = useRouter();
    const [rows,setRows] = useState([]);
    const [i,setI] = useState(0);
    console.log("i am finding and comparing id ",props)
    const getAppointment = () => {
      axios.get(`http://localhost:3000/api/appointment?id=${props.userDetail.id}`)
          .then(response=>{
            setRows(response.data.Appointments)
            console.log("response ",response.data.Appointments)
          })
          .catch(err=>console.log(err))

    }
    
    useEffect(()=>getAppointment(),[])
    console.log("rows",rows)
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
                        <PeopleIcon className={classes.icon} />
                        Appointments
                        </Typography>
                    
            </Breadcrumbs>
   
    <TableContainer component={Paper} className={classes.container} elevation={3} style={{marginTop:'10px'}}>
      <Table className={classes.table} size="small" aria-label="a dense table"  >
        <TableHead style={{backgroundColor:'#2B4B80'}}>
          <TableRow>
            <TableCell><Typography style={{color:'white'}}   >Name</Typography></TableCell>
            <TableCell align="left"   style={{color:'white'}}><Typography variant="button"  >Email</Typography></TableCell>
            <TableCell align="left"  style={{color:'white'}}><Typography variant="button" >Time</Typography></TableCell>
            <TableCell align="left"  style={{color:'white'}}><Typography variant="button" >Date</Typography></TableCell>
            <TableCell align="left"  style={{color:'white'}}><Typography variant="button" >Status</Typography></TableCell>
            <TableCell align="center" style={{color:'white'}}><Typography variant="button" >Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
              {console.log("checking format",row.clientData.name) }
              {row.clientData.name}
              </TableCell>
              <TableCell align="left">{row.clientData.email}</TableCell>
              <TableCell align="left">{row.startDate.slice(11,16)}-{row.endDate.slice(11,16) }</TableCell>
              <TableCell align="left">{row.endDate.slice(0,9)}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="center">
                  <IconButton  onClick={() => router.push("/consultant/client")}><VisibilityIcon  color="primary"/></IconButton>
                 <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>




        </>

    )
}

export default Appointment;