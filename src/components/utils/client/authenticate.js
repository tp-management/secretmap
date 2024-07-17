import { FetchAPI_template } from "../FetchAPI_template";


export const Auth_Login = async(data) => {


    const url = `${process.env.REACT_APP_SERVER}api/v1/client/auth/login`;
    const method = "POST";
    const body = {
        email: data.email,
        password: data.password,
    }

    return await FetchAPI_template(url,method,body);

}

export const Auth_Signup = async(data) => {

    const url = `${process.env.REACT_APP_SERVER}api/v1/client/auth/register`;
    // const url = "http://localhost:5000/api/v1/client/auth/register"

    const method = "POST";
    const body = {
        name: data.name,
        email: data.email,
        password: data.password,
    }
    
    const fetch_api_request = await FetchAPI_template(url,method,body);

    return fetch_api_request;

}