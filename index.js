let inquirer;

import('inquirer').then((inquirerModule) => {
  inquirer = inquirerModule.default;
  
  const fs = require('fs');
  const path = require('path');
  const { generateSVG } = require('./lib/utils');

  inquirer
    .prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo text:',
        validate: input => (input.length > 0 && input.length <= 3 ? true : 'Please enter up to three characters.'),
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal number):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['triangle', 'circle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal number):',
      },
    ])
    .then(answers => {
      const { text, textColor, shape, shapeColor } = answers;
      console.log('User input:', { text, textColor, shape, shapeColor });

      const svgString = generateSVG(text, textColor, shape, shapeColor);

      fs.writeFile('logo.svg', svgString, err => {
        if (err) {
          console.error('Error writing file:', err);
          return;
        }
        console.log('Generated logo.svg');
        console.log('File saved at:', path.resolve('logo.svg'));
      });
    })
    .catch(err => {
      console.error('Error:', err);
    });
}).catch(err => {
  console.error('Error loading inquirer:', err);
});
