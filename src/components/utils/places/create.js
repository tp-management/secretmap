import { FetchAPI_template } from "../FetchAPI_template";

export const Create = async(data, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/places/new`;
    // const url = "http://localhost:5000/api/v1/user/places/new"


    const method = "POST";
    
    const fetch_api_request = await FetchAPI_template(url,method,data,token);

    return fetch_api_request;
}
