import { FetchAPI_template } from "../FetchAPI_template";


// ----------------------------------UPDATE----------------------------------------------------------


export const Update = async(body, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/me/update`;

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}


// ----------------------------------SETTINGS----------------------------------------------------------


export const UpdateSettings = async(body, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/me/settings`;

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;
}


// ----------------------------------INTERESTS----------------------------------------------------------


export const UpdateInterests = async(body, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/me/interests`;

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;
}

export const UpdateLevel = async(body, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/me/level`;

    const method = "POST";

    const fetch_api_request = await FetchAPI_template(url,method,body,token);
    return fetch_api_request;
}