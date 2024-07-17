import { FetchAPI_template } from "../FetchAPI_template";

export const deleteInviteById = async(inviting_id, token) => {

    if(!inviting_id || !token)return {message: "Something is missing"};

    const url = `${process.env.REACT_APP_SERVER}api/v1/user/invitings/delete/${inviting_id}`;

    const method = "POST";
    const body = {};

    const fetch_api_request = await FetchAPI_template(url,method,body,token);

    return fetch_api_request;

}