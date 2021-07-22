import axios from "axios";

export const UsersRandomDataProvider = ({ type, params, baseAPIurl }) => {

    let options = null;

    switch (type) {
        case "GET_USERS":
            if (baseAPIurl) {
                options = {
                    method: 'GET',
                    url: `${baseAPIurl}/?results=100`
                };
            } else {
                throw new Error(`Error baseAPIurl are necessary`)
            }
            break;

            case "GET_CSV":
                if (baseAPIurl) {
                    options = {
                        method: 'GET',
                        url: `${baseAPIurl}/?format=csv`
                    };
                } else {
                    throw new Error(`Error baseAPIurl are necessary`)
                }
                break;
    }

    if (!!options) {
        let response = axios(options)
            .then((res) => {
                return res.data
            })
            .catch(error => {
                console.error(`Error calling the url ${options.url} using the the method ${options.method}`, error);
            })

        return response;

    } else {
        console.error("Unsupported Data Provider request parameters");
    }
}

