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

// surfaces

const getListSurface1 = async() => {
    try{
        console.log(API_URL + "/surface/surface1");
        return axios.get(API_URL + "/surface/surface1");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const getListSurface2 = async() => {
    try{
        console.log(API_URL + "/surface/surface2");
        return axios.get(API_URL + "/surface/surface2");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const getListSurface3 = async() => {
    try{
        console.log(API_URL + "/surface/surface3");
        return axios.get(API_URL + "/surface/surface3");
    } catch (error) {
        console.log("ERREUR ", error);
    }
    
}

const getListSurface4 = async() => {
    try{
        console.log(API_URL + "/surface/surface4");
        return axios.get(API_URL + "/surface/surface4");
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

const getUser = async(tracabilite) => {
    try{
        console.log(`${API_URL}/user/${tracabilite}`);
        return axios.get(`${API_URL}/user/${tracabilite}`);
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

const addForm = async(newForm) => {
    try{
        return axios.put(`${API_URL}/form`, newForm);
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
    getListSurface1,
    getListSurface2,
    getListSurface3,
    getListSurface4,
    addForm
}



export default TracabiliteService;
