export const FetchAPI_template = async(url, method, body_obj, custom_token) => {

    const get_method = "GET" || "get";
    const post_method = "POST" || "post";

    const response = {
        status: false,
        data: null,
        message: "not implemented"
    }

    if(!url){response.status=501; response.message = "you must enter valid url!"}
    if(method !== get_method && method !== post_method){response.status=501; response.message = "make sure fetch method is valid!"}
    if(method === post_method && !body_obj){response.status=501; response.message = "you must define body object to send a POST request!"}

    if(response.status === 501)return response;

    const custom_headers = (custom_token) ? {
        "Content-Type" : "application/json",
        "accept" : "application/json",
        "authorization" : `Bearer ${custom_token}`
    } :
    {
        "Content-Type" : "application/json",
        "accept" : "application/json",
    }

    const custom_body = !body_obj ? null : JSON.stringify(body_obj) 

    try {

        const req = await fetch(url, {
            method: method || "GET", 
            headers: custom_headers,
            body: custom_body
        });

        if(req.status === 401)throw new Error("Unauthorized")


        const response_json = await req.json();

        if(!req.ok)throw new Error(response_json.message || req.statusText ||  "Something went wrong!");

        if(!response_json.status)throw new Error(response_json.message)

        response.data = response_json.response;
        response.status = true;
        response.message = response_json.message || (response_json.status && "Success");

        
    } catch (error) {
        response.data = null;
        response.status = false;
        response.message = error.message || "Unexpected error, please try again";
    }


    return response
};