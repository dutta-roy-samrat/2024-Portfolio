export const getFormFieldsInOrder = (formValues) => {
  const { firstName, lastName, email, subject, message } = formValues;

  return [firstName, lastName, email, subject, message];
};
