# Logo-Generator-M10
Developed a Node.js command-line application to generate SVG logos based on user input. Prompted users for logo text, colors, and shapes, ensuring output matched specified criteria. Recorded a demonstration video of the application.

https://bcgosselin.github.io/Logo-Generator-M10

## Description
This project is Robert Gosselin's tenth bootcamp challenge. This project was created to showcase his skills and aptitude using only text based instructions. This application was hand-written utilizing credited resources [Credits](#credits). The goal of this challenge was to develop and engineer a fuctioning SVG logo generator. Everything included was apart of an ongoing bootcamp to develop and hone Full Stack Web Development skills.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Tests](#tests)
- [Questions](#questions)

## Installation
requires Inquirer package: https://www.npmjs.com/package/inquirer/v/8.2.4
requires Node package: https://nodejs.org/en/download
requires Jest package: https://jestjs.io/

## Usage
please view attached video link for usage instructions:

https://app.screencastify.com/v3/watch/Gpq2gci3wI4pSobgVGEA

## License
[![License Badge](https://img.shields.io/badge/MIT-yellow)]()

## Credits
constructors referenced:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

referred to for classes:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

referred to for SVG shape:
    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

referred to for text within SVG:
    https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts

referred to for inquirer prompts:
    https://www.npmjs.com/package/inquirer#methods

referenced for guideance:
    https://www.youtube.com/watch?v=GJYMcLus3v0


## Tests
This project uses Jest for testing the shape classes and their render() methods. The tests ensure that each shape class can generate the correct SVG string representation with the specified shape color.

The tests cover the following scenarios for each shape class:

Triangle: Ensures that the render() method returns a string containing <polygon.
Circle: Ensures that the render() method returns a string containing <circle.
Square: Ensures that the render() method returns a string containing <rect.

## Questions
For questions about the project, please contact [bcgosselin](https://github.com/bcgosselin) at bcgosselin@gmail.com.
