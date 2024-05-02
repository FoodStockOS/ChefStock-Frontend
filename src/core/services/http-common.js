import axios from "axios";

export default axios.create({
    baseURL: `https://monolithicwebservices-production.up.railway.app/api/v1`,
    headers: {
        accept: "application/json",
    },
});
