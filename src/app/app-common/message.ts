export const Message = {
  required: "This field is required",
  invalid: "Not a valid email/mobile",
  firstName: {
    invalid: "Not a valid first name",
  },
  guardian_name: {
    invalid: "Not a valid first guardian name",
  },
  middleName: {
    invalid: "Not a valid middle name",
  },
  lastName: {
    invalid: "Not a valid last name",
  },
  email: {
    invalid: "Not a valid email",
    exists: "Email already is in use",
    not_exists: `User doesn't exits`,
  },
  mobile: {
    invalid: "Not a valid mobile number",
    leastAlphabet: "Letters are not allowed",
    leastSpecialChar: "Special charactrers are not allowed",
    minimumLength: "Must contain 5 digits",
    maximumLength: "Maximum length is 20 digits",
  },
  mobileCountryCode: {
    invalid: "Not a valid code",
  },
  password: {
    invalid: "Invalid password",
    leastAlphabet: "Must contain one alphabet character",
    leastNumber: "Must contain one number",
    leastSpecialChar: "Must contain one special character",
    minimumLength: "Must contain 6 characters",
  },
  confirmPassword: {
    notEquivalent: "Password does not match",
  },
  city: {
    invalid: "Not a valid city",
  },
  pincode: {
    invalid: "Not a valid pincode",
  },
  rating: {
    invalid: "Not a rating",
  },
  college_name: {
    invalid: "Not a valid college name",
  },
  dateOfBirth: {
    invalid: "Not a valid date",
  },
};
