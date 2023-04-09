import { correctAnswers } from "./input/answer";
import { questionaryResponse } from "./excelScraper";
import {
  generateAnswerBasedOnSimilarity,
  similarityAlgorithm,
} from "./similarityAlgorithm";
import { createObjectCsvWriter } from "csv-writer";

type Student = { name: string; email: string; answers: any[] };
export const generateStudentOutput = () => {
  const students: Student[] = [];
  questionaryResponse.forEach((individualResponse) => {
    const student: Student = { answers: [], email: "", name: "" };

    Object.entries(individualResponse).forEach(([key, value], index) => {
      if (index === 1) student.email = value;
      if (index === 2) student.name = value;
      if (index > 2) {
        const questionNumber = key.trim().charAt(0);
        const questionAnswer = correctAnswers[questionNumber];
        const similarity = similarityAlgorithm(questionAnswer, value);

        const answerWithSuccessRate =
          generateAnswerBasedOnSimilarity(similarity);

        student.answers.push(
          `Questão ${index - 2} ${answerWithSuccessRate} \n`
        );
      }
    });
    students.push(student);
  });

  const csvWriter = createObjectCsvWriter({
    path: "./src/output/grades.csv",
    header: [
      { id: "name", title: "Nome" },
      { id: "email", title: "E-mail" },
      { id: "answers", title: "Respostas" },
    ],
    headerIdDelimiter: " ",
  });
  csvWriter.writeRecords([
    {
      name: "-------------------------",
      email: "-------------------------",
      answers:
        "-----------------------------------------------------------------------------------------------------",
    },
    ...students,
  ]);
};
