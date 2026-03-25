export function validatePassword(password) {
  const errors = [];

  if (password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain a number');
  }

  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain an uppercase letter');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}