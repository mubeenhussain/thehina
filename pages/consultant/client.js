import Head from "next/head";
import PreviewConsultant from "../../components/consultant/PreviewClient";
import Grid from "@material-ui/core/Grid";
// import SideBar from "../../components/consultant/SideBar";
import Nav from "../../components/Nav";

const admin = () => {
  return (
    <div>
      <Head>
        <title>Consultant Dashboard</title>
      </Head>
      <Grid container>
      {/* <Nav /> */}
          <Grid item xs={3} style={{marginTop:'30px',padding:'30px'}}>
              {/* <SideBar /> */}
          </Grid>
          {/* <Grid item xs={1}></Grid> */}
        <Grid item xs={8} style={{marginTop:'30px',padding:'30px'}}>
            <PreviewConsultant />
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
      
      
    </div>
  );
};

export default admin;
