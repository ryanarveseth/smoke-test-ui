import {sendGetRequest, sendPostRequest, sendDeleteRequest} from "../util/FetchUtil";

const URL = 'http://localhost:8080/test';


export const createTest = (testCase) =>
    sendPostRequest(URL + '/create', testCase);

export const getAllTests = () =>
    sendGetRequest(URL + '/get/all');

export const getTestByTestId = (id) =>
    sendGetRequest(URL + `/get/${id}`);

export const runTestsInListOfTestIds = (tests) =>
    sendPostRequest(URL + '/run', tests);

export const runOneTestByTestId = (id) =>
    sendGetRequest(URL + `/run/${id}`);

export const runAllTests = () =>
    sendGetRequest(URL + `/run/all`);

export const updateTest = (testCase) =>
  sendPostRequest(URL + '/update', testCase);

export const deleteTestById = (id) =>
  sendDeleteRequest(URL + `/delete/${id}`);