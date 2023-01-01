export const validationSchema = {
  required: true,
  minLength: {
    value: 2,
    message:
      'The minimum length of your caption should be 2 characters at least.',
  },
};
