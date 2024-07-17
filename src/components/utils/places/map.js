import { FetchAPI_template } from "../FetchAPI_template";

export const Map = async(data, token) => {

    if(!data || !token)return {message: "Something is missing"};

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/places/map`;

    const method = "POST";
    const body = {
        pid: data.pid
    }
    const fetch_api_request = await FetchAPI_template(url,method,body,token);
    console.log("kazkas: ", fetch_api_request)
    return fetch_api_request;

}