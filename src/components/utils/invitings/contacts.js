import { FetchAPI_template } from "../FetchAPI_template";

export const ShowContacts = async(data, token) => {

    if(!data || !token)return {message: "Something is missing"};

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/invitings/contacts`;

    const method = "POST";
    const body = {
        inviting_id: data.inviting_id
    }
    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}