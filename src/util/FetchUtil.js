
const defaultHeader = {
    'Content-Type': 'application/json'
};

export const sendPostRequest = (url, body, headers = {...defaultHeader}) =>
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers
    });

export const sendGetRequest = (url, headers = {...defaultHeader}) =>
    fetch(url, {
        method: 'GET',
        headers
    });

export const sendDeleteRequest = (url, headers = {...defaultHeader}) =>
  fetch(url, {
    method: 'DELETE',
    headers
  });