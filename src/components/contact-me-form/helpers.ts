import { DefaultContactFieldType, DefaultContactFormValueType } from "./constants";

export const getFormFieldsInOrder = (formValues: DefaultContactFormValueType): DefaultContactFieldType[] => {
  const { firstName, lastName, email, subject, message } = formValues;

  return [firstName, lastName, email, subject, message];
};
