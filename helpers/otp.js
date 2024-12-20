const otpGenerator = async (length = 4, type = "numeric") => {
    const numericCharacters = '0123456789';
    const alphanumericCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let characters = '';
    let otp = '';

    // Determine character set based on type
    if (type === 'numeric') {
        characters = numericCharacters;
    } else if (type === 'alphanumeric') {
        characters = alphanumericCharacters;
    } else {
        throw new Error("Invalid OTP type. Use 'numeric' or 'alphanumeric'.");
    }

    // Generate OTP
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }

    return otp;
  };
  
  module.exports = otpGenerator;