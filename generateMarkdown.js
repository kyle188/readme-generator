const generateMarkdown = (data) => {
  const {
      title,
      description,
      installationInstructions,
      usageInformation,
      license,
      contributionGuidelines,
      testInstructions,
      github,
      email
  } = data

  return `
# ${title}


## Description

${description}

## Table of Contents

-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[License](#License)
-[Contributing](#Contributing)
-[Test](#Test)
-[Questions](Questions)

## Installation  

${installationInstructions}

## Usage

${usageInformation}

## License

This application is licensed under ${license} 

## Contributing

${contributionGuidelines}

## Tests

${testInstructions}

## Questions

Find me on GitHub  (https://github.com/${github})

Or for furthur questions reach out to me via Email:   ${email}
`
}

export default generateMarkdown
