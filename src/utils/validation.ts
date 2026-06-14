export const validateEmail = (email: string) => {
  if (!email.trim()) return 'Email is required';
  if (!email.includes('@')) return 'Invalid email';
  return '';
};

export const validatePassword = (password: string) => {
  if (!password.trim()) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return '';
};