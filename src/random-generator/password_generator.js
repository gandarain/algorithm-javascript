/**
 * Generate random password on length
 * @param {number} length value
 * @return {string} random password
 */
const passwordGenerator = (length) => {
  const masterPassword = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  let password = '';
  for (let i = 0, n = masterPassword.length; i < length; ++i) {
    password += masterPassword.charAt(Math.floor(Math.random() * n));
  }

  return password;
};

export default passwordGenerator;
