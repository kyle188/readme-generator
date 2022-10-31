import fs from 'fs'
import inquirer from 'inquirer'
import Choices from 'inquirer/lib/objects/choices.js'
import generateMarkdown from './generateMarkdown.js'

inquirer.prompt([
   {
    type:"input",
    message:"What is your project title?",
    name: "title"
   },
   {
      type:"input",
      message:"Please fill in the description information for this project?",
      name: "description"
     },
     {
      type:"input",
      message:"Please enter any installation instructions",
      name: "installationInstructions"
     },
     {
      type:"input",
      message:"Please enter your usage information",
      name: "usageInformation"
     },
     {
      type:"list",
      message:"Please choose license for project",
      name: "license",
      choices: [
        "GNU",
        "MIT"
      ]
     },
     {
      type:"input",
      message:"Please enter contribution details",
      name: "contributionGuidelines"
     },
     {
      type:"input",
      message:"Please enter test instructions if any",
      name: "testInstructions"
     },
     {
      type:"input",
      message:"Please enter a message that addresses furthur questions",
      name: "questions"
     },
     {
       type:"input",
       message:"Please enter your GitHub username",
       name: "github"
      },
      {
        type:"input",
        message:"Please enter the email address you would like on your page",
        name: "email"
      },
      {
       type:"input",
       message:"Please enter any instructions on how you can furthur be reached with additional questions",
       name: "questions"
      },
    ])
    .then(answers => {
      console.log(answers)
      
      const readmeInfo = generateMarkdown(answers)
      console.log(readmeInfo)
      fs.writeFile('./README.md', readmeInfo, error => {
   if (error) throw error

   console.log('Readme saved')
  })

   })
  .catch(error => console.log(error))



//GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a
//  description, 

//  installation instructions, 

//  usage information, 

//  contribution guidelines, and 

//  test instructions

// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

//This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;

//create a command-line application that dynamically generates a professional README.md file from a user's input using the [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4). 

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README