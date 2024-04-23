const { Triangle, Circle, Square } = require('./shapes');

function generateSVG(text, textColor, shape, shapeColor) {
  const shapeObj = {
    triangle: new Triangle(shapeColor),
    circle: new Circle(shapeColor),
    square: new Square(shapeColor),
  };

  const shapeSVG = shapeObj[shape].render();

  const svgString = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200">
  ${shapeSVG}
  <text x="150" y="100" fill="${textColor}" text-anchor="middle" font-size="24">${text}</text>
</svg>
  `.trim();

  console.log('Generated SVG:', svgString);

  return svgString;
}

module.exports = { generateSVG };