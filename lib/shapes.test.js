// import
const { Triangle, Circle, Square } = require('./shapes');

// group shapes together to prevent multiple files
describe('Shapes', () => {
  // test to test if triangle renders and is red color
  test('Triangle should draw correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toContain('<polygon');
  });

  // test to test if circle renders and is blue color
  test('Circle should draw correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toContain('<circle');
  });

  // test to test if square renders and is green color
  test('Square should draw correctly', () => {
    const square = new Square('green');
    expect(square.render()).toContain('<rect');
  });
});
