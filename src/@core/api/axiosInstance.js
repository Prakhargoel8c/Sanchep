import axios from "axios";
const apiInstance = () =>
  axios.create({
    baseURL: "http://chat.talkingmart.com:5004/api/",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "X-API-KEY": "secret"
    }
  });
export { apiInstance };
