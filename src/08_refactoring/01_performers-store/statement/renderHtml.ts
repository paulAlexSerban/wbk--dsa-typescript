import { StatementData } from "../types";
import { usd } from "./utils";

const renderHtml = (data: StatementData): string => {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;
  result += "<table>\n";
  result += "<tr><th>play</th><th>seats</th><th>cost</th></tr>\n";

  for (let perf of data.performances) {
    result += `  <tr><td>${perf.play.name}</td><td>${
      perf.audience
    }</td><td>${usd(perf.amount)}</td></tr>\n`;
  }

  result += "</table>\n";
  result += `<p>Amount owed is <em>${usd(data.totalAmount)}</em></p>\n`;
  result += `<p>You earned <em>${data.totalVolumeCredits}</em> credits</p>\n`;

  return result;
};

export default renderHtml;
