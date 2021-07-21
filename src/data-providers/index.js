import { UsersRandomDataProvider } from './users/UsersRandomDataProvider.js';
import { getAPI } from "./api/api.js";



export const DataProvider = (providerType, type, params) => {

    let data = null;

    switch (providerType) {

        case "USERS_PROFILE":
            data = UsersRandomDataProvider({
                type: type, 
                params: params, 
                baseAPIurl: getAPI(), 
            });
            break;

        default:
            break;
    }

    return data;
};
