import { FetchAPI_template } from "../FetchAPI_template"

export const fetchAllInvitings = async() => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/client/invitings/all`;

    const method = "GET";

    const fetch_api_request = await FetchAPI_template(url,method);

    return fetch_api_request;
}
