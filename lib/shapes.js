class Shape {
  constructor(textColor, shapeColor, textContent){
    this.textColor = textColor;
    this.shapeColor = shapeColor;
    this.textContent = textContent;
  }

  // setColor() {

  // }
}

class Square extends Shape{  
  render(){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="230, 18 230, 182 70, 182 70, 18" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

class Circle extends Shape{
  render(){
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

class Triangle extends Shape{
  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textContent}</text>

  </svg>`
  }
}

module.exports = {Square, Circle, Triangle}