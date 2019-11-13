export function Triangle(side1, side2, side3) {
  this.side1 = side1;
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function() {
  if ((typeof this.side1 === "string") || (typeof this.side2 === "string") || (typeof this.side3 === "string")) {
    return "no strings!";
  } else if ((Array.isArray(this.side1)) || (Array.isArray(this.side2)) || (Array.isArray(this.side3))) {
    return "no arrays!";
  } else if ((this.side1 < 0) || (this.side2 < 0) || (this.side3 < 0)) {
    return "no negatives!";
  }else if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  } else if ((this.side1 !== this.side2) && ((this.side1 !== this.side3)) && ((this.side2 !== this.side3))) {
    return "scalene triangle";
  }  else if (this.side1 === this.side2 && this.side2 === this.side3) {
    return "equilateral triangle";
  }
};
