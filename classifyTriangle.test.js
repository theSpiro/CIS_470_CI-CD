
const  {compute}  = require('./compute');

describe('classifyTriangle: Required input conditions -  See readme for more details', () => {
    test('should return Passed for addition', () => {
      expect(compute(2, 4, '+')).toBe(6);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });
  
    
  
    test('should return Passed for subtraction', () => {
      expect(checkSubtraction(7, 2, '-')).toBe(5);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

  
    test('should return Passed for division', () => {
      expect(checkDivsion(4, 2, '/')).toBe(2);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    

    test('should return Cannot Divide by 0 for division', () => {
      expect(checkDivsion(4, 0, '/')).toBe('Cannot Divide By 0');
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    test('should return Passed for mutiplication', () => {
      expect(checkMutiplication(4, 2, '*')).toBe(8);
      // add more test cases based on your requirements and Boundary Value Analysis + Equivalence Partitioning
    });

    


  });
  