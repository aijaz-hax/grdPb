// utils/validatePassword.js
export const validatePassword = (password) => {
    const errors = [];
  
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long.');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter.');
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter.');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Password must contain at least one number.');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      errors.push('Password must contain at least one special character.');
    }
  
    return errors;
  };

  interface FormData {
    firstname: string;
    lastname: string;
    username: string;
    code?: string;
    phone: string;
    email: string;
    password: string;
  }
  
  interface Errors {
    [key: string]: string | string[] | undefined;
  }

  // utils/validateForm.js
export const validateForm = (formData: FormData): Errors => {
  const errors: Errors = {};


  // First Name
  if (!formData.firstname) {
    errors.firstname = 'This is a required field.';
  }

  // Last Name
  if (!formData.lastname) {
    errors.lastname = 'This is a required field.';
  }
  if (!formData.username) {
    errors.username = 'This is a required field.';
  }

  // Email
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!formData.email || !emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // if (!formData.code) {
  //   errors.code = 'This is a required field.';
  // }

  // Phone
  const phonePattern = /^(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/; // Adjust pattern based on format needed
  if (!formData.phone || !phonePattern.test(formData.phone)) {
    errors.phone = 'Please provide valid number';
  }

  // Password
  const passwordErrors = [];
  if (formData.password.length < 8) {
    passwordErrors.push('Password must be at least 8 characters long.');
  }
  if (!/[A-Z]/.test(formData.password)) {
    passwordErrors.push('Password must contain at least one uppercase letter.');
  }
  if (!/[a-z]/.test(formData.password)) {
    passwordErrors.push('Password must contain at least one lowercase letter.');
  }
  // if (!/[0-9]/.test(formData.password)) {
  //   passwordErrors.push('Password must contain at least one number.');
  // }
  if (!/[!@#$%^&*]/.test(formData.password)) {
    passwordErrors.push('Password must contain at least one special character.');
  }
  if (passwordErrors.length > 0) {
    errors.password = passwordErrors;
  }

  return errors;
};

  