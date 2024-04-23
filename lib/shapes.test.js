const { Triangle, Circle, Square } = require('./shapes');

describe('Shapes', () => {
  test('Triangle should draw correctly', () => {
    const triangle = new Triangle('red');
    expect(triangle.render()).toContain('<polygon');
  });

  test('Circle should draw correctly', () => {
    const circle = new Circle('blue');
    expect(circle.render()).toContain('<circle');
  });

  test('Square should draw correctly', () => {
    const square = new Square('green');
    expect(square.render()).toContain('<rect');
  });
});
