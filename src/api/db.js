import { createClient } from "@libsql/client/web";

const client = createClient({
  url: import.meta.env.VITE_DB_URI,
  authToken: import.meta.env.VITE_DB_TOKEN,
});

export async function getHoldSigns() {
  const data = await client.execute("select * from test");
  return data.rows[0][1];
}
