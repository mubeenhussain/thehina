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
import { Grid } from '@material-ui/core';

import HomeIcon from '@material-ui/icons/Home';
import ViewListIcon from '@material-ui/icons/ViewList';
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
  


const ViewSchedule = (props) =>{
    const classes = useStyles();
    const router = useRouter();
    const [rows,setRows] = useState([]);
    const getAppointment = () => {
        axios.get(`http://localhost:3000/api/schedule?consultantId=${props.userDetail.id}`)
        .then(res=>{
          setRows(res.data.schedule)  
          console.log("data view schedule",res.data)       
        })
          .catch(err=>console.log(err))
     
    }
    
    useEffect(()=>getAppointment(),[])
    
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
                        <ViewListIcon className={classes.icon} />
                        Schedule List
                        </Typography>
                    
            </Breadcrumbs>   
      <Grid container>

      <Grid item md={8}>
    <TableContainer component={Paper} className={classes.container} elevation={3} style={{marginTop:'20px'}}>
      <Table className={classes.table} size="small" aria-label="a dense table"  >
        <TableHead style={{backgroundColor:'#2B4B80'}}>
          <TableRow>
            <TableCell><Typography style={{color:'white'}}   >Subject</Typography></TableCell>
            <TableCell align="center"  style={{color:'white'}}><Typography variant="button" >Date</Typography></TableCell>
            
            <TableCell align="center" style={{color:'white'}}><Typography variant="button" >Time</Typography></TableCell>
            <TableCell align="center" style={{color:'white'}}><Typography variant="button" >Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

        {rows.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="center">{row.endDate.slice(0,9)}</TableCell>
              <TableCell align="center">{row.startDate.slice(11,16)}-{row.endDate.slice(11,16) }</TableCell>
              
              
              <TableCell align="center">
                  <IconButton  ><VisibilityIcon  color="primary"/></IconButton>
                 <IconButton aria-label="delete"><DeleteIcon /></IconButton>
                  </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </Grid>

      </Grid>
        </>

    )
}

export default ViewSchedule;