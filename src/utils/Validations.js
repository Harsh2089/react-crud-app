// List of validations
const Validations = {
  REQUIRED: {
    required: {
      value: true,
      message: "This field is required.",
    },
  },
  REQUIRED_EMAIL: {
    required: {
      value: true,
      message: "This field is required.",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Please enter a valid email address.",
    },
  },
};

export const MaxLengthValidationFunc = (value) => ({
  maxLength: {
    value,
    message: `Please enter the value must be less than or equal to ${value} characters.`,
  },
});

export const MinLengthValidationFunc = (value) => ({
  minLength: {
    value,
    message: `Please enter the value must be greater than or equal to ${value} characters.`,
  },
});

export default Validations;
