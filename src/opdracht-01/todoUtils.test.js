const { isValidTodo, getTodoPriority } = require('./todoUtils');

describe('Todo Utils', () => {

  test('isValidTodo geeft true voor geldige todo', () => {
    const result = isValidTodo('Boodschappen doen');
    expect(result).toBe(true);
  });

  test('isValidTodo geeft false voor lege string', () => {
    const result = isValidTodo('');
    expect(result).toBe(false);
  });

  test('getTodoPriority geeft high voor urgent', () => {
    const result = getTodoPriority('urgent bellen');
    expect(result).toBe('high');
  });

  test('getTodoPriority geeft low voor normale todo', () => {
    const result = getTodoPriority('koffie drinken');
    expect(result).toBe('low');
  });

});