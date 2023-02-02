import axios from "axios";
import { API_URL } from "@env";

const getListTracabilite = async() => {
    try{
        console.log(API_URL + "/form");
        return axios.get(API_URL + "/form");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const getListUsers = async() => {
    try{
        console.log(API_URL + "/user");
        return axios.get(API_URL + "/user");
    } catch (error) {
        console.log("ERREUR ", error);
    }
}

const getListAnimaux = async() => {
    try{
        console.log(API_URL + "/animal");
        return axios.get(API_URL + "/animal");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const supprForm = async(tracabilite) => {
    try{
        console.log(`${API_URL}/form/${tracabilite}`);
        return axios.delete(`${API_URL}/form/${tracabilite}`);
    } catch (error) {
        console.log("ERREUR ", error);
    }
}

const addUser = async(newUtilisateur) => {
    try{
        return axios.put(`${API_URL}/user`, newUtilisateur);
    } catch {
        console.log("ERREUR ", error);
    }
}




const TracabiliteService = {
    getListTracabilite,
    getListUsers,
    supprForm,
    getListAnimaux,
    addUser,
}



export default TracabiliteService;
