import { optellen, isVolwassen } from './utils';

test('optellen telt twee getallen op', () => {
  // Arrange
  const getal1 = 5;
  const getal2 = 3;
  
  // Act
  const resultaat = optellen(getal1, getal2);
  
  // Assert
  expect(resultaat).toBe(8);
});

test('isVolwassen geeft true voor 18+', () => {
  // Arrange & Act
  const resultaat = isVolwassen(20);
  
  // Assert
  expect(resultaat).toBe(true);
});

test('isVolwassen geeft false voor onder 18', () => {
  const resultaat = isVolwassen(16);
  expect(resultaat).toBe(false);
});