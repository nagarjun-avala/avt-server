const validateSupplier = (name, mobile, email, website, address) => {
  let errors = [];
  if (!name) {
    errors.push({ field: "name", message: "Name is required." });
  }
  if (mobile && !/^\d{10}$/.test(mobile)) {
    errors.push({ field: "mobile", message: "This mobile number is invalid." });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: "email", message: "This email is invalid." });
  }
  if (website && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(website)) {
    errors.push({ field: "website", message: "This website URL is invalid." });
  }
  if (!address) {
    errors.push({ field: "address", message: "Address is required." });
  }
  return errors;
};

const validateAdminRegister = (
  username,
  fullname,
  email,
  mobile,
  password,
  roleId
) => {
  let errors = [];
  if (!username) {
    errors.push({ field: "username", message: "This username is required." });
  } else {
    if (username.length < 3 || username.length > 20) {
      errors.push({
        field: "username",
        message: "Username must be between 3 and 20 characters long.",
      });
    }
    if (!/^[a-zA-Z0-9@_.-]+$/.test(username)) {
      errors.push({
        field: "username",
        message:
          "Username can only contain letters, numbers, underscores, hyphens, periods, and @.",
      });
    }
  }
  if (!fullname) {
    errors.push({ field: "fullname", message: "This fullname is required." });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push({ field: "email", message: "This email is invalid." });
  }
  if (mobile && !/^\d{10}$/.test(mobile)) {
    errors.push({ field: "mobile", message: "This mobile number is invalid." });
  }
  if (!password) {
    errors.push({ field: "password", message: "This password is required." });
  }
  if (password.length < 6 || password.length > 20) {
    errors.push({
      field: "password",
      message: "Password must be between 6 and 20 characters long.",
    });
  }
  if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])/.test(password)
  ) {
    errors.push({
      field: "password",
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character.",
    });
  }
  if (!roleId) {
    errors.push({ field: "roleId", message: "This roleId is required." });
  }
  return errors;
};

const validatorCreateRole = (
  code,
  label,
  short,
  isActive,
  type,
  priority,
  canDelete,
  canUpdate,
  activatedAt,
  description,
  createdById
) => {
  let errors = [];

  return errors;
};

// ? Testing New way to create validators
const AdminValidator = {};

module.exports = {
  AdminValidator,
  validateAdminRegister,
  validateSupplier,
  validatorCreateRole,
};
