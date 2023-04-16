# Auto grading app

This application automate the process of correcting student's answers on a google form spreadsheet, using a word-similarity algorithm, it gives student answers based on how their answer is similar to user-defined keywords

### How it works?
- It reads the excel datasheet provided as as input (details on how covered below)
- Identifies the student, their questions and answers
- Using an algorithm that finds keywords in their responses, they receive an answer based on how close they got on that
- Generates a CSV with all data on student's answers

## Requirements

- Node.JS
- A spreadsheet following this pattern:
![alt text](https://media.discordapp.net/attachments/833406534322094095/1095794716450230322/image.png?width=1806&height=248)
- Answers for each question in the spreadhseet


## Installation

1. Install dependencies.

   ```sh
   yarn i
   ```
2. In the INPUT folder, add the spreadsheet with the name of `template.xlsx`
3. Fill the questions in `answer.ts` file
4. Start app

   ```sh
   yarn start
   ```

## Sidenote

The project's main focus was to study on how to automate processess that envolved excel, and the school environment is a great fit for that, and also let it be known, that the correction method to give grades is NOT VALID and NOT TRUSTWORTHY, it does not replace a teacher's correction, it is only a simple method to check on how the answer matches some user-defined keywords.