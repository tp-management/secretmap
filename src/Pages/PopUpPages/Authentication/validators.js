export const validate = (data, type) => {
    const errors = {};
  
    if (!data.email) {
      errors.email = "Required!";
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(data.email).toLowerCase())) {
      errors.email = "Invalid email!";
    } else {
      delete errors.email;
    }
  
    if (!data.password) {
      errors.password = "Required";
    } else if (!(data.password.length >= 6)) {
      errors.password = "too short!";
    } else {
      delete errors.password;
    }
  
    if (type === "signUp") {
      if (!data.name) {
        errors.name = "Required!";
      } else {
        delete errors.name;
      }
      // if (!data.confirmPassword) {
      //   errors.confirmPassword = "Confirm the Password";
      // } else if (!(data.confirmPassword === data.password)) {
      //   errors.confirmPassword = "Password is not match!";
      // } else {
      //   delete errors.confirmPassword;
      // }
    }
  
    return errors;
  };
  