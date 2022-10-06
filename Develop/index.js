// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What is a short description of your project?",
    name: "description",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How to you intall this app?",
    name: "installation",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "What are instuctions and examples for use?",
    name: "usage",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "List any collaborators",
    name: "credits",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "list",
    message: "What license did you use?",
    name: "license",
    choices: [
      "Apache 2.0",
      "EPL 1.0",
      "BSD 2",
      "GNU v3",
      "MIT",
      "Mozilla",
      "None of the Above",
    ],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "How can others contribute?",
    name: "contributions",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "Do you have test examples for this application?",
    name: "testing",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your GitHub username",
    name: "github",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your Email",
    name: "email",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "i need a value to continue";
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("sucess");
    }
  });
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", generateMarkdown(data));
    console.log(data);
  });
}

// Function call to initialize app
init();
