import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Header from "./Header";
import Grid from "@material-ui/core/Grid";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
