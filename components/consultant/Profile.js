import React, { useEffect ,useState} from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';
import { Grid, Typography } from '@material-ui/core';
import axios from 'axios';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GrainIcon from '@material-ui/icons/Grain';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import { spacing } from '@material-ui/system';

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

const Profile = (props) => {
    const classes = useStyles();
    return (
        
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
                        <AccountCircleIcon className={classes.icon} />
                        Profile
                        </Typography>
                    
            </Breadcrumbs>
            
            {/* {console.log("user data",userDetail.user.imageUrl!=="undefined"?userDetail.user.imageUrl:null)} */}
            {console.log("profile hjsghjsvhj",props.userDetail)}

{props.userDetail.user?

           <Grid container spacing={3} style={{marginTop:'10px'}}>
               <Grid item xs={12} md={6}>
                        <Paper elevation={3} style={{padding:'30px'}} > 
                                <Grid item xs={12}  >
                                    <img alt="profile image"   src={`/uploads/${props.userDetail.user.imageUrl}`} style={{width:'200px',height:'200px',borderRadius:'50%'}}  />
                                </Grid>

                                <Grid item xs={12} style={{marginTop:'10px'}}>
                                <List component="nav" className={classes.root} aria-label="contacts">
                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">User Name :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography variant="h5" component="h2" >{props.userDetail.user.name}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Arabic Name :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography variant="h5" component="h2" >{props.userDetail.user.arabicName}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Email :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography component="p" >{props.userDetail.user.email}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Main Domain :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography variant="h6" component="h4" >{props.userDetail.user.mainDomain}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Summary of Expertise :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center" sytle={{marginTop:'20px',textAlign:"justify"}}><Typography component="p"  >{props.userDetail.user.summaryOfExpertise}</Typography></ListItemText>
                                    </ListItem>

                                    
                                </List>
                               {/* <Typography variant="h5" component="h2" gutterBottom>
                               {props.userDetail.user.name}
                                </Typography>
                                <Typography variant="h5" component="h2" gutterBottom>
                                 {props.userDetail.user.arabicName}
                                </Typography>
                                <Typography component="p" gutterBottom>
                                {props.userDetail.user.email}
                                </Typography>
                                <Typography  variant="h6" component="h4" gutterBottom>
                                {props.userDetail.user.mainDomain}
                                </Typography>
                                <Typography  component="p" gutterBottom>
                                {props.userDetail.user.summaryOfExpertise}
                                </Typography> */}
                                </Grid>
                        </Paper>
                </Grid>
                <Grid item  md={5}>
                <Paper elevation={3} style={{padding:'30px'}} > 
                               
                                <Grid item xs={12} style={{marginTop:'10px'}}>
                                <List component="nav" className={classes.root} aria-label="contacts">
                                    

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Hour Price :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography component="p" >{props.userDetail.user.hourPrice}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Id :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center"><Typography component="p" >{props.userDetail.user.idNumber}</Typography></ListItemText>
                                    </ListItem>

                                    <ListItem >
                                        <ListItemIcon align="left">
                                        <Typography component="p">Date of Birth :</Typography>
                                        </ListItemIcon>
                                        <ListItemText align="center" sytle={{marginTop:'20px',textAlign:"justify"}}><Typography component="p"  >{props.userDetail.user.dateOfBirth}</Typography></ListItemText>
                                    </ListItem>

                                    
                                </List>
                              
                                </Grid>
                        </Paper>
                </Grid>
               
           </Grid>
       
           :
           null
}
            
        </>
    )
}

export default Profile;