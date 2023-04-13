import axios from "axios"
const URL = "http://localhost:5000/category/get-category";

export const getData = () =>{
    return (dispatch) =>{
        return axios.get(URL)      
        .then(res=>{
            dispatch({type:'addData',payload:res.data})
      
        })  
        // .catch(err=>{
        //     dispatch({type:'GET_USER_FAILED',payload:err})
        // })
    }
}