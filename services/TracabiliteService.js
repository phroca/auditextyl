import axios from "axios";
import { API_URL } from "@env";

const getListTracabilite = async() => {
    try{
        return axios.get(API_URL + "/test");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const TracabiliteService = {
    getListTracabilite
}

export default TracabiliteService;