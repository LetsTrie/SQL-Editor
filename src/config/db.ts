import initSqlJS from "sql.js";

const init = async () => {
  const SQL = await initSqlJS({
    locateFile: (file) => `https://sql.js.org/dist/${file}`,
  });

  const db = new SQL.Database();
  return db;
};

export default {
  init,
};
