import axios from "axios";
import { LOCAL_IP, PORT } from "../const/config";
export default axios.create({
  baseURL: `http://${LOCAL_IP}:${PORT}`
});
