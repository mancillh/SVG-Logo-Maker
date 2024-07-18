const inquirer = require("inquirer");
const fs = require('fs');
const shapes = require("./lib/shapes");

const questions = [
    {
      type: "input",
      message: "Enter logo text (up to 3 characters).",
      name: "textContent",
    }, {
      type: "input",
      message: "Enter text color. Use a color keyword or a hexadecimal number.",
      name: "textColor",
    },{
      type: "checkbox",
      message: "Enter shape.",
      name: "shape",
      choices: ['Triangle', 'Circle', 'Square'],
    }, {
      type: "input",
      message: "Enter background color. Use a color keyword or a hexadecimal number.",
      name: "bgColor",
    }
  ]

function init() {
    inquirer.prompt(questions).then((answers) => {

    });
}

const content = `<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill=${white} />

  <${answers.shape} cx="150" cy="100" r="80" fill=${answers.bgColor} />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.textContent}</text>

</svg>`;

fs.writeFile(`${textContent}-logo-${textColor}-on-${bgColor}.svg`, content, err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Generated logo.svg');
  }
});
