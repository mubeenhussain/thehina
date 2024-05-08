import {USER,DELETE_USER,CONSULTANT,DELETE_CONSULTANT} from '../types';
import axios from 'axios';
   
export const user=(data)=>{
  // console.log("data in action",data)
  return{
    type:USER,
    payload:data,
  }
}

export const deleteUser=(id,role)=>{
  axios.delete(`http://localhost:3000/api/user?id=${id}&&role=${role}`)
  .then(response=>{
    console.log(response);
  })
  .catch(err=>console.log(err))
  
  return{
    type:DELETE_USER,
    payload:id
  }  
}

export const consultant=(data)=>{
  // console.log("data in action",data)
  return{
    type:CONSULTANT,
    payload:data,
  }
}

export const deleteConsultant=(id,role)=>{
  axios.delete(`http://localhost:3000/api/user?id=${id}&&role=${role}`)
      .then(response=>{
        console.log(response.data);
      })
      .catch(err=>console.log(err))
  return{
    type:DELETE_CONSULTANT,
    payload:id,
  }
}
