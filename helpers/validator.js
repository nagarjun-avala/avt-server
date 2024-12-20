const validateUsername = (username) => {
    let errors = [];
    if (!username) {
      errors.push({ field: "username", message: "This username is required." });
    } else {
      if (username.length < 3 || username.length > 20) {
        errors.push({ field: "username", message: "Username must be between 3 and 20 characters long." });
      }
      if (!/^[a-zA-Z0-9@_.-]+$/.test(username)) {
        errors.push({ field: "username", message: "Username can only contain letters, numbers, underscores, hyphens, periods, and @." });
      }
    }
    return errors;
  };
  
  const validateFullname = (fullname) => {
    let errors = [];
    if (!fullname) {
      errors.push({ field: "fullname", message: "This fullname is required." });
    }
    return errors;
  };
  
  const validateEmail = (email) => {
    let errors = [];
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push({ field: "email", message: "This email is invalid." });
    }
    return errors;
  };
  
  const validateMobile = (mobile) => {
    let errors = [];
    if (mobile && !/^\d{10}$/.test(mobile)) {
      errors.push({ field: "mobile", message: "This mobile number is invalid." });
    }
    return errors;
  };
  
  const validatePassword = (password) => {
    let errors = [];
    if (!password) {
      errors.push({ field: "password", message: "This password is required." });
    }
    return errors;
  };
  
  const validateRoleId = (roleId) => {
    let errors = [];
    if (!roleId) {
      errors.push({ field: "roleId", message: "This roleId is required." });
    }
    return errors;
  };
  
  module.exports = {
    validateUsername,
    validateFullname,
    validateEmail,
    validateMobile,
    validatePassword,
    validateRoleId,
  };