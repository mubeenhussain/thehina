import Head from "next/head";
import Grid from "@material-ui/core/Grid";
// import SideBar from "../../components/admin/SideBar";

// import Nav from "../../components/Nav";
// import Consultants from "../../components/admin/Consultants";
import EditPanel from "../../../components/admin/manageruser/EditPanel";

const user = () => {
  return (
    <>
      <Head>
        <title>Update User </title>
      </Head>

      <EditPanel />
       
    </>
  );
};

export default user;
