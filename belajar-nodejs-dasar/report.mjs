// Delivers a JSON-formatted diagnostic summary, written to a file.

// The report is intended for development, test, and production use, to capture and preserve information for problem determination.

import process from "process";

try {
  throw new Error("Wadduhh!");
} catch (error) {
  // process.report.writeReport(error) // output filename: report.xxxxxxxx.xxxxxx--
  process.report.writeReport("laporan.json", error); // output filename: laporan.json
  console.log(error);
}
