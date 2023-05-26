import errorHandler from './error-handler';

export function get(
  url: string,
  successCallback?: (data: any, ...args: any) => void,
  errorCallback?: (error: any, ...args: any) => void
) {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status}`);
      }
    })
    .then((data) => (successCallback ? successCallback(data) : null))
    .catch((error) => {
      errorHandler(error);
      return errorCallback ? errorCallback(error) : null;
    });
}

export function post(
  url: string,
  body: object,
  successCallback?: (data: any, ...args: any) => void,
  errorCallback?: (error: any, ...args: any) => void
) {
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status}`);
      }
    })
    .then((data) => (successCallback ? successCallback(data) : null))
    .catch((error) => {
      errorHandler(error);
      return errorCallback ? errorCallback(error) : null;
    });
}
