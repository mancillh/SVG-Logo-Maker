// Parent/Constructor Class "Shape" creates an object from what the user chooses as the text color, text content, and fill color for the shape
class Shape {
  constructor(textColor, shapeColor, textContent){
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.textContent = textContent;
  }
}

//Child Class "Square" inherits the text color, text content, and fill color for the shape from the "Shape" 
//constructor class and includes the render function which returns a string with the content of an SVG file
//part of the string will create the square shape
class Square extends Shape{  
  render(){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="230, 18 230, 182 70, 182 70, 18" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

//Child Class "Circle" inherits the text color, text content, and fill color for the shape from the "Shape" 
//constructor class and includes the render function which returns a string with the content of an SVG file
//part of the string will create the circle shape
class Circle extends Shape{
  render(){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

//Child Class "Triangle" inherits the text color, text content, and fill color for the shape from the "Shape" 
//constructor class and includes the render function which returns a string with the content of an SVG file
//part of the string will create the triangle shape
class Triangle extends Shape{
  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

//module.exports exports the three classes in the curly braces to other files, in the case of this project, the index.js file
module.exports = {Square, Circle, Triangle}