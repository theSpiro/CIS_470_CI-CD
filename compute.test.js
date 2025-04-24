
const  {compute}  = require('./compute');

describe('compute: Tests each operation of the calculator', () => {
    test('should return Passed for addition', () => {
      expect(compute(2, 4, '+')).toBe(6);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    
  
    test('should return Passed for subtraction', () => {
      expect(compute(7, 2, '-')).toBe(5);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return Passed for division', () => {
      expect(compute(4, 2, '/')).toBe(2);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    

    test('should return Cannot Divide by 0 for division', () => {
      expect(compute(4, 0, '/')).toBe('Cannot divide by 0');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return Passed for mutiplication', () => {
      expect(compute(4, 2, '*')).toBe(8);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    

  });
  