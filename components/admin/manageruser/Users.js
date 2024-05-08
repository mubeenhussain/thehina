import React, {useEffect, useState}  from "react";
import { useRouter } from "next/router";
import { makeStyles } from '@material-ui/core/styles';
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
import {useSelector, useDispatch } from "react-redux";
import * as actions from '../actions/actions'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import { Grid } from "@material-ui/core";



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
    link: {
      display: 'flex',
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },
  }));

  


  
  

const Users = () =>{
    const classes = useStyles();
    const router = useRouter();
    const dispatch = useDispatch();
    // const [rows,setRows] = useState(useSelector(state=>{ return state.adminReducer.userData}));
    
    
    
    const getUser = () => {
      axios.get('http://localhost:3000/api/user?role=User')
      .then(response=>{
        dispatch(actions.user(response.data.user));
        console.log("hellog",response.data.user);
      })
      .catch(err=>console.log(err))
    }

    // const deleteUser = (id,role) => {
    //   console.log("",role);
    //   axios.delete(`http://localhost:3000/api/user?id=${id}&&role=${role}`)
    //   .then(response=>{
    //     console.log(response);
    //   })
    //   .catch(err=>console.log(err))
    //   return{
    //     type:DELETE_CONTACT,
    //     payload:id
    //   }
    // }
    const data = useSelector(state=>{ return state.adminReducer.userData});
    
    
    useEffect(()=>{
    getUser()
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
              Users
              </Typography>
                    
            </Breadcrumbs>


    <Grid container  style={{marginTop:'10px'}}>
      <Grid item md={8}>
          <TableContainer component={Paper} className={classes.container}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{backgroundColor:'#2B4B80'}}>
          <TableRow>
            <TableCell><Typography style={{color:'white'}} >Name</Typography></TableCell>
            <TableCell align="left"   style={{color:'white'}}><Typography variant="button"  >Email</Typography></TableCell>
            <TableCell align="left"  style={{color:'white'}}><Typography variant="button" >User Type</Typography></TableCell>
            <TableCell align="center"  style={{color:'white'}}><Typography variant="button"  >Actions</Typography></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
     
          {
          data.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
             
              <TableCell align="center">
                  <IconButton aria-label="delete" onClick={(e) => {e.preventDefault();router.push("/admin/update/user", { shallow: true })}} ><VisibilityIcon  color="primary"/></IconButton>
                  <IconButton aria-label="delete" onClick={()=>dispatch(actions.deleteUser(row._id,row.role))}><DeleteIcon /></IconButton>
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



export default Users;