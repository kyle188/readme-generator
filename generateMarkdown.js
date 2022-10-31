const generateMarkdown = (data) => {
  const {
      title,
      description,
      installationInstructions,
      usageInformation,
      license,
      contributionGuidelines,
      testInstructions,
      questions,
      github,
      email
  } = data

  return `
# ${title}

## Description

${description}


## Table of Contents

## Installation  

${installationInstructions}

## Usage

${usageInformation}

## License

${license}

## Contributing

${contributionGuidelines}

## Tests

${testInstructions}

## Questions

${questions}<br>
-GitHub: (https://github.com/${github})<br>
-Email: (${email})
`
}

export default generateMarkdown
