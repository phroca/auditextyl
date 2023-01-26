import axios from "axios";
import { API_URL } from "@env";

const getListTracabilite = async() => {
    try{
        console.log(API_URL + "/form/getForms");
        return axios.get(API_URL + "/form/getForms");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const getListUsers = async() => {
    try{
        console.log(API_URL + "/user/getUsers");
        return axios.get(API_URL + "/user/getUsers");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}




const TracabiliteService = {
    getListTracabilite,
    getListUsers

}



export default TracabiliteService;
