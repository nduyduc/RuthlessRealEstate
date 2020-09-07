import { getData } from "api/helpers";

export const getInfo = (credentials) => getData("/api/agent.php", { auth_credentials: credentials });