// declaration to hold imported inquirer module
let inquirer;

// import
import('inquirer').then((inquirerModule) => {
  // assignment
  inquirer = inquirerModule.default;
  
  // required modules
  const fs = require('fs');
  const path = require('path');
  const { generateSVG } = require('./lib/utils');

  // prompt user for input
  inquirer
    .prompt([
      // prompt for logo text
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => (input.length > 0 && input.length <= 3 ? true : 'Please enter up to three characters.'),
      },
      // prompt for text color
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
      },
      // prompt for shape
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['triangle', 'circle', 'square'],
      },
      // prompt for shape color
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
      },
    ])
    .then(answers => {
      // Deconstruct answers to get input values
      const { text, textColor, shape, shapeColor } = answers;
      
      // Generate SVG string based on input
      const svgString = generateSVG(text, textColor, shape, shapeColor);

      // write file to logo.svg file in root directory
      fs.writeFile('logo.svg', svgString, err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Generated logo.svg');
      });
    })
    .catch(err => {
      console.error('Error:', err);
    });
}).catch(err => {
  console.error('Error loading inquirer:', err);
});
