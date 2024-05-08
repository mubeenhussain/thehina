import Head from "next/head";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Posts from "../pages/api/cardData";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useRouter } from "next/router";
import Nav from "../components/Nav";
import React, {useEffect, useState}  from "react";
import axios from 'axios';
import { useDispatch,useSelector } from "react-redux";
import * as actions from   '../components/admin/actions/actions'


const useStyles = makeStyles({
  root: {
    //   minWidth: 200,
    //   maxHeight:300
  },
  media: {
    //   height: 160,
  },
});



const consultation = () => {
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
  
  const data = useSelector(state=>{ 
      console.log(state.adminReducer.consultantData);
    return state.adminReducer.consultantData});
  
  useEffect(()=>{
    getConsultant()
    },[])    


  return (
    <>
      <Head>
        <title>Consultation Page</title>
      </Head>

      <Grid container>
        <Nav />
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img style={{ width: "100%" }} src="/consultSection.png" />
        </Grid>
        <Grid
          container
          spacing={10}
          style={{ margin: "0", backgroundColor: "#F5F6F9" }}
        >
          
          {data.map((postItem, index) => (
            <Grid item md={4} key={postItem._id}>
              <Card
                
                className={classes.root}
                style={{
                  maxwidth: "100px",
                  padding: "20px",
                  border: "1px solid #e0e0e0",
                }}
              >
                <img
                    style={{
                      height: "300px",
                      maxWidth: "350px",
                    }}
                    className={classes.media}
                    src={`/uploads/${postItem.imageUrl}`}
                    
                    title="consult"
                  />
                <CardActionArea>
                  
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ textAlign: "center" }}
                    >
                      {postItem.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="primary"
                      component="p"
                      style={{ textAlign: "center" }}
                    >
                      {postItem.mainDomain}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{ textAlign: "center" }}
                    >
                      {postItem.summaryOfExpertise}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "center" }}>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      router.push(`/calender/${postItem._id}`)
                      
                    }
                  }
                  >
                   Book Appointment 
                   </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default consultation;
