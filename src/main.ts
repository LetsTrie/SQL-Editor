import { reset } from "./actions/reset";
import database from "./config/db";
import { testQuery } from "./data";
import { dom } from "./dom";
import { Table } from "./models/Table";
import "./style/style.scss";

document.addEventListener("DOMContentLoaded", async () => {
  const db = await database.init();

  dom.editor.value = testQuery;

  dom.execute.addEventListener("click", () => {
    reset();

    try {
      const sql = dom.editor.value;
      const data = db.exec(sql);

      data.forEach((result, index) => {
        const table = new Table(result, index + 1);
        const tableHTML = table.generateTableHTML();
        dom.output.innerHTML += tableHTML;
      });
    } catch (e) {
      dom.output.innerHTML = `<p style="color:red;"> ${e as any} </p>`;
    }
  });
});
