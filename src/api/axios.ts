import axios from "axios";
const BASE_URL = "https://api.weekday.technology/adhoc/getSampleJdJSON";

export default axios.create({ baseURL: BASE_URL });
