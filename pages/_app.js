import { Provider } from "react-redux";
import { useStore } from "../../the-hina/redux-thunk/store";
import Layout from "../components/Layout";
import "../styles/globals.css";
// import { useDispatch,useSelector } from "react-redux";
// import {parseCookies} from 'nookies'
// import *  as  actions from "../redux-thunk/actions"
// import cookies from "js-cookie";
// import jwt_decode from "jwt-decode";



function MyApp({ Component, pageProps }) {
  // const token = cookies.get("Token");
  // console.log("appjs",token);

  
  //   if(token){
  //     try{
  //     const dispatch = useDispatch();

  //     const decoded = jwt_decode(token);
  //     dispatch(actions.currentUser(decoded)); 
  //     }
  //     catch(err){
  //       console.log(err)
  //     }  
  //   }
  
   
 
  
  const store = useStore(pageProps.initialReduxState);



  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;


