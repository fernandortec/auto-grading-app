import { readFile, utils } from "xlsx";
import { resolve } from "path";
import { appendFileSync } from "fs";

const questionary = readFile(
  resolve(__dirname, "./", "input", "template.xlsx")
);
appendFileSync(resolve(__dirname, "./", "output", "grades.csv"), "");

const questionaryPages = questionary.SheetNames;
const questionaryResponse = utils.sheet_to_json<{ [key: string]: string }>(
  questionary.Sheets[questionaryPages[0]]
);

//TO- DO add logic to scrape data from multiple pages

export { questionaryResponse };
