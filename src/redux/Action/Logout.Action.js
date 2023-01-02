import { LOGOUT } from "../Constants/Logout.type"

export const Logout = () =>{
    return (dispatch)=>{
        dispatch({
            type: LOGOUT
        })
    }
}