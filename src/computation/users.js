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
                name: user.name.first,
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

export const getDataUserDetail = async({id}) =>{

    const usersList = await fetchUsers();
    let newUsersObj = {};

    if(usersList){
        usersList.results.forEach((user, index) => {
            if(index == id){
                console.log(user)
                newUsersObj = {
                    personal_data: { img: user.picture.large, name: user.name.first, email: user.email, phone: user.phone },
                    coordinates: { lat: parseInt(user.location.coordinates.latitude), long: parseInt(user.location.coordinates.longitude) },
                    location_data: { city: user.location.city, street: user.location.street.name, num: user.location.street.number },
                    gender: user.gender,
                    name: user.name.first,
                    email: user.email,
                    nat: user.nat,
                    date_birth: new Date(user.dob.date).toLocaleString(),
                    date_register: new Date(user.registered.date).toLocaleString()
                }
            }
        });
    }
    return newUsersObj;
}