import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.side1).toEqual(2);
    expect(triangle.side2).toEqual(4);
    expect(triangle.side3).toEqual(5);
  });
  test('should correctly determine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle(3,9,22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });
  test('should correctly determine whether three lengths make a scalene triangle', function() {
    var scalTriangle = new Triangle(4,5,7)
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
  test('should correctly determine whether three lengths make an equilateral triangle', function() {
    var equilateralTri = new Triangle(4,4,4)
    expect(equilateralTri.checkType()).toEqual("equilateral triangle");
  });
  test('should correctly determine whether three lengths include a string', function() {
    var wordsTri = new Triangle(4,"hay!",4)
    expect(wordsTri.checkType()).toEqual("no strings!");
  });
  test('should correctly determine whether three lengths includes an array', function() {
    var arrayTri = new Triangle(1,[1,2,3],3)
    expect(arrayTri.checkType()).toEqual("no arrays!");
  });
  test('should correctly determine whether three lengths includes a negative number', function() {
    var negativeTriangle = new Triangle(-3,-3,-3)
    expect(negativeTriangle.checkType()).toEqual("no negatives!");
  });
});
