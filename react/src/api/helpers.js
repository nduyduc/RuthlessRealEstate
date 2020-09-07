import queryString from "query-string";

const getURI = (uri, data) => {
    if (data == null) {
        return uri;
    }
    const newData = Object.entries(data).reduce(
        (x, [ key, value ]) => ({ ...x, [key]: JSON.stringify(value)}), {}
    );
    return `${uri}?${queryString.stringify(newData)}`;
};

export const getData = (uri, data=null) => fetch(getURI(uri, data), {
    method: "GET",
    headers: {
        Accept: "application/json",
        "Accept-Charset": "utf-8",
        "Content-Type": "application-json; charset: utf-8"
    },
    credentials: "same-origin",
}).then(response => new  Promise((resolve) =>{
    if (response.ok) {
        response.json().then(data => resolve({
            data, response
        }));
    } else {
        resolve({ response, data: null});
    }
}));

export const sendData = (uri, data=null) => fetch(uri, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Accept-Charset": "utf-8",
        "Content-Type": "application-json; charset: utf-8"
    },
    credentials: "same-origin",
    body: JSON.stringify(data),
    cors: "no-cors"
}).then(response => new  Promise((resolve) =>{
    if (response.ok) {
        response.json().then(data => resolve({
            data, response
        }));
    } else {
        resolve({ response, data: null});
    }
}));