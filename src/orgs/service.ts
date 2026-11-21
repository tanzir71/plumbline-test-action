import { query } from "../db/client.js";

export const listOrgs = () => query("select * from orgs");
