export function restCon(payload,method,route)
{
    payload=JSON.stringify(payload);
    return fetch(route, {
         method: method,
         body: payload,
         headers:{"Content-Type":"application/json"}
        });
}