import axios from "axios";

const apiRequest =axios.create({
    baseURL:"http://localhost:4930/api",
    withCredentials:true,
});
export default apiRequest;