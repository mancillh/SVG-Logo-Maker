//uses require() function built into NODE to include Inquirer (for prompting user for information about what icon
//they want), fs or file system (which allows the .svg file to be written), and imports the shapes.js classes,
//Square, Circle, and Triangle
const inquirer = require("inquirer");
const fs = require('fs');
const { Square, Circle, Triangle } = require("./lib/shapes");

//an array of questions to ask the user via Inquirer
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

  // the init() function first prompts the user for how they want their icon to look. Based on what the user 
  // selects as their icon shape, the logic here will either render a string to create a circle, square, or triangle
  // and pass their text and color information into the render function to generate the text and color they want to 
  // see within the icon. fs.writefile generates a .svg file with the content of the render function, which is a string
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

// the init() function is called when the developer first types "node index" into the terminal.
init()