import { FetchAPI_template } from "../FetchAPI_template";

export const Friends = async(data, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/benefits/friends`;

    const method = "POST";
    
    const fetch_api_request = await FetchAPI_template(url,method,data,token);

    return fetch_api_request;
}