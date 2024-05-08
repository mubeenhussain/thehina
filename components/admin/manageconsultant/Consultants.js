import React, {useEffect, useState}  from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';

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
import { useDispatch,useSelector } from "react-redux";
import * as actions from '../actions/actions'
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GrainIcon from '@material-ui/icons/Grain';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PeopleIcon from '@material-ui/icons/People';
import { Grid } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 300,
        },
    
    tbheading:{
        color:'#FFFFFF'
    },
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));
  


  
  
  
const Consultants = () =>{
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();

    const getConsultant = () => {
      axios.get('http://localhost:3000/api/user?role=Consultant')
          .then(response=>{
            dispatch(actions.consultant(response.data.user));
          })
          .catch(err=>console.log(err))
      }

    const data = useSelector(state=>{ return state.adminReducer.consultantData});

      // const deleteUser = (id,role) => {
      //   console.log("",role);
      //   axios.delete(`http://localhost:3000/api/user?id=${id}&&role=${role}`)
      //   .then(response=>{
      //     console.log(response.data);
      //     setRows(response.data.users)
      //       console.log(rows);
      //   })
      //   .catch(err=>console.log(err))
      // }
      
      useEffect(()=>{
      getConsultant()
      },[])    

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
                        Consultants
                        </Typography>
                    
            </Breadcrumbs>


       
        <Grid container style={{marginTop:'10px'}}>
          <Grid item xs={12} md={8}>
  <TableContainer className={classes.container} component={Paper} elevation={3}  >    
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor:'#2B4B80'}}>
          <TableRow>
            <TableCell style={{color:'white'}}>Name</TableCell>
            <TableCell align="left"   style={{color:'white'}}>Email</TableCell>
            <TableCell align="left"  style={{color:'white'}}>Speciality</TableCell>
            
            <TableCell align="center"  style={{color:'white'}}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">Doctor</TableCell>
              
              <TableCell align="center"> 
                <IconButton aria-label="preview"  onClick={(e) => {e.preventDefault(); router.push("/admin/update/consultant")}} ><VisibilityIcon  color="primary"/></IconButton>
                <IconButton aria-label="delete" onClick={()=>dispatch(actions.deleteConsultant(row._id,row.role))}><DeleteIcon /></IconButton>
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

export default Consultants;