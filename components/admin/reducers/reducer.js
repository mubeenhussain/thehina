import {USER,CONSULTANT,DELETE_USER, DELETE_CONSULTANT} from '../types';


const adminState = {
    userData:[],
    consultantData:[]
}
const adminReducer = (state = adminState, { type, payload }) => {
  switch (type) {
    case USER:
        console.log("data in reducer",payload);

      return {
        ...state,
        userData: payload,
      };
      case DELETE_USER:
        console.log("payload",payload);
        console.log("state.user", state.userData);
      return {
        ...state,
        userData: state.userData.filter((user)=>user._id!==payload),
      };

      case CONSULTANT:
      return {
        ...state,
        consultantData: payload,
      };

      case DELETE_CONSULTANT:
        // console.log("payload",payload);
        // console.log("state.user", state.userData);
      return {
        ...state,
        consultantData: state.consultantData.filter((user)=>user._id!==payload),
      };

    default:
      return state;
    
}
}

export default adminReducer;