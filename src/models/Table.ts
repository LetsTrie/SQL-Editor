interface Column {
  name: string;
  type: string;
}

interface ResultObject {
  columns: string[];
  values: any[][];
}

export class Table {
  queryNumber: number;
  columns: Column[];
  values: any[][];

  constructor(result: ResultObject, queryNumber: number) {
    this.columns = result.columns.map((name: string) => ({
      name,
      type: "string",
    }));
    this.values = result.values;
    this.queryNumber = queryNumber;
  }

  generateTableHTML(): string {
    let html = `
        <div style="margin-bottom: 30px;">
            <h2 style="color: #112D4E; font-size: 26px; padding-bottom: 10px;">
                Query #${this.queryNumber}
            </h2>
            <div style="overflow-x: auto;">
                <table style="border-collapse: collapse; width: 100%; margin: auto;">
                    <thead style="background-color: #f2f2f2;">
                        <tr>
    `;

    this.columns.forEach((column) => {
      html += `
        <th style="border: 1px solid #c7c7c7; padding: 12px 8px; text-align: left; background-color: #d6d6ff;">
            ${column.name}
        </th>`;
    });

    html += `</tr></thead><tbody>`;
    this.values.forEach((row, index) => {
      html += `<tr style="background-color: ${
        index % 2 === 0 ? "#fff" : "#f2f4ff"
      };">`;
      row.forEach((cell) => {
        html += `<td style="border: 1px solid #ddd; padding: 8px; font-size: 14px; ">${cell}</td>`;
      });
      html += `</tr>`;
    });
    html += `</tbody></table></div></div>`;

    return html;
  }
}
