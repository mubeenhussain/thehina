import { useRouter } from "next/router";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { MenuItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menuButton: {
    // marginRight:'40px',
    // fontFamily:'sans-serif',
    
  //   '&:hover': {
      
  //     color: '#FF5C97',
  // },
  }
 
});

const Nav = () => {
  const router = useRouter();
  const classes = useStyles();

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#FFFFFF",zIndex:'1400' }}>
      <Toolbar style={{ height: "70px",padding:"10px",display:'flex',justifyContent:'space-between' }} >
        <MenuItem onClick={() => router.push("/login")} align="left" className={classes.menuButton}>
          <img
            src="https://thehina.com/assets/img/logo/logo.png"
            style={{marginBottom:'13px'}}
            height="50%"
          />
        </MenuItem>

        <MenuItem
          className={classes.menuButton}
          
          style={{ color:'#2B4B80',fontWeight:'500' }}
          onMouseEnter={(e) => e.target.style.color = '#FF5C97'}
          onMouseLeave={(e) => e.target.style.color = '#2B4B80'}
          onClick={() => router.push("/")}
        >
          Logout
        </MenuItem>

      </Toolbar>
      
    </AppBar>
  );
};

export default Nav;
