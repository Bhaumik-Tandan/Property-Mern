export function restCon(payload,method,route)
{
    payload=JSON.stringify(payload);
    return fetch("http://localhost:5000/"+route, {
         method: method,
         body: payload,
         headers:{"Content-Type":"application/json"}
        });
}