function createShape(shapes) {
    if (shape == "triangle") {
        return `polygon points="150, 18 244, 182 56, 182" `;
        } else if (shape == "circle") {
        return `circle cx="150" cy="100" r="80"`;
        } else if (shape == "square") {
          return `polygon points="230, 18 230, 182 70, 182 70, 18"`
        } else return '';
    }

function setColor () {

}

module.exports = shapes;