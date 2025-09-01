import database from "../infra/database";

async function create() {
  const newBook = await runInsertQuery();
  return newBook;

  async function runInsertQuery() {
    const results = await database.query(`SELECT 1+1;`);
    return results.rows[0];
  }
}
