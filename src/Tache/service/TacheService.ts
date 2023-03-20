import axios from 'axios'
import type Tache from '../model/Tache';

const API = "https://dummyjson.com/products/";
// const API = "https://reqres.in/api/users?page=1/";

class TacheService {

    // pour ajouter une Tache
    async ajouter(tache: Tache) {
        try {
            await axios.post(API, {Description:tache.Description, Date:tache.Date, status:tache.Status}).then((resp) => {
                console.log(tache);
            })
        }
        catch (error) {
            console.log('there is somme errors we can\'t add information.\n please try again later');
        }
    }

    // pour modifier une Tache selon id de Tache
    async modifier(tache: Tache) {
        try {
            await axios.put(API, tache).then((resp) => {
                console.log("updated");
            })
        }
        catch (error) {
            console.log('there is somme errors we can\'t update informations.\n please try again later');
        }
    }

    // pour supprimer une Tache selon id de Tache
    async supprimer(id: number) {
        try {
            await axios.delete(API + id).then((resp) => {
                console.log('deleted');
            })
        }
        catch (error) {
            console.log('there is somme errors we can\'t delete.\n please try again later');
        }
    }

    // pour afficher les infos d'une Tache selon id
    async afficher(id: number) {
        try {
            await axios.get(API + id).then((resp) => {
                console.log(resp.data);
            })
        }
        catch (error) {
            console.log('there is somme errors we can\'t show informations.\n please try again later');
        }
    }

    //pour affichier les infos de tout les Taches
    async afficherAll() {
        try {
            await axios.get(API).then((resp) => {
                console.log(resp.data);
            })
        }
        catch (error) {
            console.log('there is somme errors we can\'t show informations.\n please try again later');
        }
    }
}

export default new TacheService();