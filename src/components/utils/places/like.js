import { FetchAPI_template } from "../FetchAPI_template";


export const Like_ = async(data, token) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/places/like`;

    const method = "POST";
    const body = {
        pid: data
    }

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}