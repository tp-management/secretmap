import { FetchAPI_template } from "../FetchAPI_template";



export const GetUserProfile = async(token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/me/profile`;

    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method,null,token);

    return fetch_api_request;

}