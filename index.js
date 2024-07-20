const inquirer = require("inquirer");
const fs = require('fs');
const { Square, Circle, Triangle } = require("./lib/shapes");


const questions = [
  {
    type: "input",
    message: "Enter logo text (up to 3 characters).",
    name: "textContent",
  },
  {
    type: "input",
    message: "Enter text color. Use a color keyword or a hexadecimal number.",
    name: "textColor",
  },
  {
    type: "list",
    message: "Enter shape.",
    name: "shape",
    choices: ['Triangle', 'Circle', 'Square'],
  },
  {
    type: "input",
    message: "Enter background color. Use a color keyword or a hexadecimal number.",
    name: "shapeColor",
  }]

function init() {
  inquirer.prompt(questions)
    .then((answers) => {
      let userShape;

      if (answers.shape === 'Circle') {
        userShape = new Circle(answers.textColor, answers.shapeColor, answers.textContent);

      } else if (answers.shape === 'Square') {
        userShape = new Square(answers.textColor, answers.shapeColor, answers.textContent);

      } else {
        userShape = new Triangle(answers.textColor, answers.shapeColor, answers.textContent);
      }

      fs.writeFile(`./examples/${answers.textContent}-logo-${answers.textColor}-on-${answers.shapeColor}.svg`, userShape.render(), (err, res) => console.log('shape created'))

    })
}

init()