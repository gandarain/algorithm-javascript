/**
 * Generate random otp based on length
 * Use Jump Search for sorted array
 * @param {number} length value
 * @return {string} random otp number
 */
const otpGenerator = (length) => {
  const template = '0123456789';
  let otp = '';

  for (let i = 0; i < length; i++) {
    otp += template[Math.floor(Math.random() * 10)];
  }
  return otp;
};

export default otpGenerator;
