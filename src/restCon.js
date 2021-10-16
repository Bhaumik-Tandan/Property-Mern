export function restCon(payload,method,route)
{
    payload=JSON.stringify(payload);
    return fetch("https://property-bhaumik-tandan.herokuapp.com/"+route, {
         method: method,
         body: payload,
         headers:{"Content-Type":"application/json"}
        });
}