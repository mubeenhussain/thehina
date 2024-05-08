import React from "react";
import { useState ,useEffect  } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PreviewClient from './PreviewClient';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import { MenuItem } from "@material-ui/core";
import Appointment from './Appointment';
import { useRouter } from "next/router";
import EventIcon from '@material-ui/icons/Event';
import AddAppointment from './AddAppointment';
import Profile from "./Profile";
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ViewSchedule from "./ViewSchedule";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#4043bc",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "#2B4B80",
      color: "white",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    // "&:hover": {
    //   backgroundColor: "#2B4B80",
    //   color: "white",
    //   "& .MuiListItemIcon-root": {
    //     color: "white"
    //   }
    // }
  },
  selected: {},
})(MuiListItem);

export default function ConsultantDashboard(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [component, setComponent] = useState('profile')
  const [hide,setHide] =useState(true);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openM = Boolean(anchorEl);

  
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  const router = useRouter();
  const handleDrawerOpen = () => {
    setOpen(true);
    setHide(false);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setHide(true);
  };
  // console.log("consultant component",props.userDetail)
  const [userDetail,setUserDetail] = useState({});
  const getUserDetail=()=>{
      axios.get(`http://localhost:3000/api/user?id=${props.userDetail.id}`)
      .then(res=>{setUserDetail(res.data);console.log("checking response",res.data)})
  }

  useEffect(()=>getUserDetail(),[])
  console.log(userDetail.user)
  return (
    
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{ backgroundColor: "white", height: "70px" }}
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="primary"
            // style={{backgroundColor:'white'}}
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {hide === true ? (
              <img
                src="https://thehina.com/assets/img/logo/logo.png"
                height="40%"
              />
            ) : null}
          </Typography>
          
          {/* <MenuItem
            className={classes.menuButton}
            style={{ color: "#2B4B80", fontWeight: "500" }}
            onMouseEnter={(e) => (e.target.style.color = "#FF5C97")}
            onMouseLeave={(e) => (e.target.style.color = "#2B4B80")}
            onClick={() => router.push("/")}
          >
            Logout
          </MenuItem> */}
           {userDetail.user?
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="profile picture" src={`/uploads/${userDetail.user.imageUrl}`} className={classes.large} />
                
                {console.log("image",userDetail.user.imageUrl)}
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={openM}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {setComponent('profile'), setSelectedIndex(0)}}>Profile</MenuItem>
                <MenuItem  onClick={(e) =>{e.preventDefault(); router.push("/")}}>Logout</MenuItem>
              </Menu>
            </div>
            :
            <Avatar alt="profile picture"  className={classes.large} />
            }
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar} style={{ height: "70px" }}>
          <Typography variant="h6" noWrap>
            <img
              src="https://thehina.com/assets/img/logo/logo.png"
              // style={{marginBottom:'13px'}}
              height="40%"
            />
            
          </Typography>
          <IconButton onClick={handleDrawerClose} color="primary">
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav" aria-label="main mailbox folders" style={{marginTop:'30px'}}>
                    <ListItem button selected={selectedIndex === 0} onClick={() => {setComponent('profile') , setSelectedIndex(0)}}>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>

                        <ListItemText disableTypography  primary="Profile" />
                    </ListItem>
                    <Divider  />
                    
                    <ListItem button selected={selectedIndex === 1} onClick={() => {setComponent('appointment'), setSelectedIndex(1)}}>
                        <ListItemIcon>
                            <PeopleIcon />
                        </ListItemIcon>
                        <ListItemText variant="h3" disableTypography   primary="Clients" />
                      </ListItem>
                        <Divider />
                    <ListItem button selected={selectedIndex === 2} onClick={() => {setComponent('addAppointment'), setSelectedIndex(2)}}>
                        <ListItemIcon>
                            <EventIcon />
                        </ListItemIcon>
                        <ListItemText variant="h3" disableTypography   primary="Add Appointment" />
                    </ListItem>
                    <Divider />
                    <ListItem button selected={selectedIndex === 3} onClick={() => {setComponent('viewSchedule'), setSelectedIndex(3)}}>
                        <ListItemIcon>
                            <ScheduleIcon />
                        </ListItemIcon>
                        <ListItemText variant="h3" disableTypography   primary="View Schedule" />
                    </ListItem>
        </List>    
      </Drawer>
    
      <main className={classes.content} style={{justifyContent:'center'}}>
        <div className={classes.toolbar}  />
        {
          component === 'profile' ?
          <Profile userDetail={userDetail}/>
          :
          component === 'appointment' ?
          <Appointment userDetail={props.userDetail} />
          :
          component === 'addAppointment' ?
          <AddAppointment   userDetail={props.userDetail} />
          :
          component === 'viewSchedule' ?
          <ViewSchedule   userDetail={props.userDetail} />
          :
          null
        }
      </main>   
    </div>
  );
}
