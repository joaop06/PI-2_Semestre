import axios from "axios";

const apiURL = axios.create({
    baseURL: "http://localhost:8080/",
})

export default apiURL;