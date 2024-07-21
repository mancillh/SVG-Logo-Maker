//imports the functions from the shapes.js file
const { Circle, Triangle, Square } = require('./shapes.js');

//tests that the render method within the Circle function creates with three arguments ('a', 'b', 'c') passed in for 
//text color, shape fill color, and text content respectively
describe("Circle render", () => {
  const circle = new Circle('a', 'b', 'c')

  test('render should return a string', () => {
    expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

  </svg>`)
  })
});

//tests that the render method within the Triangle function creates with three arguments ('a', 'b', 'c') passed in for 
//text color, shape fill color, and text content respectively
describe("Triangle render", () => {
  const triangle = new Triangle('a', 'b', 'c');

  test('render should return a string', () => {
    expect(triangle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

  </svg>`)
  })
});

//tests that the render method within the Square function creates with three arguments ('a', 'b', 'c') passed in for 
//text color, shape fill color, and text content respectively
describe("Square render", () => {
  const square = new Square('a', 'b', 'c');

  test('render should return a string', () => {
    expect(square.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="230, 18 230, 182 70, 182 70, 18" fill="b" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="a">c</text>

  </svg>`)
  })
})


