import { DataProvider } from "@/data-providers/index.js";

const fetchUsers = async () =>{
    let usersList = [];
    let usersEmpty = [];
    try{
        usersList = await DataProvider("USERS_PROFILE", "GET_USERS");
    }catch(error){
        usersList = usersEmpty;
        console.error(`Error loading users ${error}`)
    }
    return usersList;
}

export const getDataUsers = async() =>{

    const usersList = await fetchUsers();
    let newUsersList = [];
    let newUsersObj = {};

    if(usersList){
        usersList.results.forEach(user => {
            newUsersObj = {
                gender: user.gender,
                name: user.name,
                email: user.email,
                nat: user.nat,
                date_birth: new Date(user.dob.date).toLocaleString(),
                date_register: new Date(user.registered.date).toLocaleString()
            }

            newUsersList.push(newUsersObj);
        });
    }

    return newUsersList;
}