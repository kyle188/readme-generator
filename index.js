import fs from 'fs'
import inquirer from 'inquirer'
import Choices from 'inquirer/lib/objects/choices.js'
import generateMarkdown from './generateMarkdown.js'

inquirer.prompt([
  
  {
    type: "input",
    message: "What is your project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Please fill in the description information for this project?",
    name: "description"
  },
  {
    type: "input",
    message: "Please enter any installation instructions",
    name: "installationInstructions"
  },
  {
    type: "input",
    message: "Please enter your usage information",
    name: "usageInformation"
  },
  {
    type: "list",
    message: "Please choose a license choice for project",
    name: "license",
    choices: [
      "GNU",
      "ISC",
      "Apache",
      "MIT",
      "Mozilla",
      "None"
    ]
  },
  {
    type: "input",
    message: "Please enter contribution details",
    name: "contributionGuidelines"
  },
  {
    type: "input",
    message: "Please enter test instructions if any",
    name: "testInstructions"
  },
  {
    type: "input",
    message: "Please enter your GitHub username",
    name: "github"
  },
  {
    type: "input",
    message: "Please enter the email address you would like on your page",
    name: "email"
  }
])

  .then(answers => {
    console.log(answers)

    const readmeInfo = generateMarkdown(answers)
    console.log(readmeInfo)
    fs.writeFile('./README.md', readmeInfo, error => {
      if (error) throw error

      console.log('Readme generated')
    })

  })
  .catch(error => console.log(error))