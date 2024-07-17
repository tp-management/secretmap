import { FetchAPI_template } from "../FetchAPI_template";


export const Create = async(data, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/invitings/new`;

    const method = "POST";
    const body = {
        destination: data.destination,
        about: data.about,//"Looking for a trip buddy, this is my first post!",
        gender: data.gender
    }

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}