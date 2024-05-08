import React, { useEffect } from "react";
import Head from "next/head";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import Login from "../components/Login";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    let token = Cookies.get("Token");
    // if (!token) {
    //   console.log("hello");
    //   router.push("/login");
      
    // }
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      {/* <h1>Home Page</h1> */}
      <Grid container style={{padding:'30px'}} >
        <Grid item  md={4} ></Grid>

       

        <Grid item md={4} xs={12}  style={{marginTop:'50px'}}>
         <Login />
        </Grid>

        <Grid item  md={4}></Grid>
      </Grid>
      
    </div>
  );
};

export default Home;
