import { PAGE_SIZE } from "../api/routes.js";

export function query(sql: string) {
  return { sql, limit: PAGE_SIZE };
}
