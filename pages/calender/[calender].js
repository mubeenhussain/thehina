import Head from "next/head";
import Calender from '../../components/Calender'
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import Nav from "../../components/Nav";



const calender = () => {
  const router = useRouter();
const id = router.query.calender; 

console.log(id, "id")
  return (
    <>
      <Head>
        <title>Calender</title>
      </Head>
     
    <Nav />
    <Grid container style={{marginTop:"20px"}}>
      <Grid item md={12}>
         <Calender id={id}  />
      </Grid>
    </Grid>
      
      
    </>
  );
};

export default calender;
