import { PerformanceCalculator } from "./statement/PerformanceCalculator";
import plays from "./data/plays.json";
import invoices from "./data/invoices.json";
import { statement, htmlStatement } from "./statement";
import { EnrichedPerformance } from "./types";

describe("statement", () => {
  it("should print statement for BigCo with multiple performances", () => {
    const invoice = invoices[0]; // First invoice from the mock data
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $650.00 (55 seats)
  As You Like It: $580.00 (35 seats)
  Othello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle no performances", () => {
    const invoice = { customer: "BigCo", performances: [] }; // No performances
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
Amount owed is $0.00
You earned 0 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with exactly 30 audience members for a tragedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "hamlet", audience: 30 }],
    }; // Exactly 30 audience members for a tragedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $400.00 (30 seats)
Amount owed is $400.00
You earned 0 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with exactly 30 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 30 }],
    }; // Exactly 30 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $540.00 (30 seats)
Amount owed is $540.00
You earned 6 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should throw an error for an unknown play type", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "unknown-play", audience: 30 }],
    }; // Invalid play ID

    const playsData = {
      "unknown-play": { name: "Unknown Play", type: "mystery" },
    }; // Unrecognized play type

    expect(() => statement(invoice, playsData)).toThrow(
      "unknown type: mystery"
    ); // Assert that it throws the correct error
  });

  it("should handle a performance with more than 30 audience members for a tragedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "hamlet", audience: 40 }],
    }; // More than 30 audience members for a tragedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  Hamlet: $500.00 (40 seats)
Amount owed is $500.00
You earned 10 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with more than 30 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 40 }],
    }; // More than 30 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $620.00 (40 seats)
Amount owed is $620.00
You earned 18 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with more than 20 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 25 }],
    }; // More than 20 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $500.00 (25 seats)
Amount owed is $500.00
You earned 5 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });

  it("should handle a performance with exactly 20 audience members for a comedy", () => {
    const invoice = {
      customer: "BigCo",
      performances: [{ playID: "as-like", audience: 20 }],
    }; // Exactly 20 audience members for a comedy
    const playsData = plays; // Use mock plays data

    const actual = statement(invoice, playsData); // Call the function
    const expected = `Statement for BigCo
  As You Like It: $360.00 (20 seats)
Amount owed is $360.00
You earned 4 credits\n`;

    expect(actual).toBe(expected); // Assert expected output
  });
});

describe("htmlStatement", () => {
  it("should print statement for BigCo with multiple performances", () => {
    const invoice = invoices[0]; // First invoice from the mock data
    const playsData = plays; // Use mock plays data

    const actual = htmlStatement(invoice, playsData); // Call the function
    const expected = `<h1>Statement for BigCo</h1>
<table>
<tr><th>play</th><th>seats</th><th>cost</th></tr>
  <tr><td>Hamlet</td><td>55</td><td>$650.00</td></tr>
  <tr><td>As You Like It</td><td>35</td><td>$580.00</td></tr>
  <tr><td>Othello</td><td>40</td><td>$500.00</td></tr>
</table>
<p>Amount owed is <em>$1,730.00</em></p>
<p>You earned <em>47</em> credits</p>\n`;

    expect(actual).toBe(expected); // Assert expected output
  });
});

describe("PerformanceCalculator", () => {
  it("should throw an error when calling amount on the base class", () => {
    const performance = { playID: "hamlet", audience: 30 };
    const play = { name: "Hamlet", type: "tragedy" };

    const calculator = new PerformanceCalculator(performance as EnrichedPerformance, play);

    expect(() => calculator.amount).toThrow("subclass responsibility");
  });
});
