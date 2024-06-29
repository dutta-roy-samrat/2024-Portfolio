interface RequiredFieldType {
  required: true
}

const REQUIRED_FIELD: RequiredFieldType = Object.freeze({ required: true });

export interface DefaultContactFieldType extends RequiredFieldType {
  id: string;
  name: string;
  value: string;
  errorMsg: string
  labelText: string;
  emailValidation?: boolean;
}

export type DefaultContactFormValueType = {
  [name: string]: DefaultContactFieldType;
}

export const DEFAULT_CONTACT_FORM_VALUES: DefaultContactFormValueType = Object.freeze({
  firstName: {
    id: "firstName",
    name: "firstName",
    value: "",
    errorMsg: "",
    labelText: "First Name",
    ...REQUIRED_FIELD,
  },
  lastName: {
    id: "lastName",
    name: "lastName",
    value: "",
    errorMsg: "",
    labelText: "Last Name",
    ...REQUIRED_FIELD,
  },
  email: {
    id: "email",
    name: "email",
    value: "",
    errorMsg: "",
    labelText: "Email",
    emailValidation: true,
    ...REQUIRED_FIELD,
  },
  subject: {
    id: "subject",
    name: "subject",
    value: "",
    errorMsg: "",
    labelText: "Subject",
    ...REQUIRED_FIELD,
  },
  message: {
    id: "message",
    name: "message",
    value: "",
    errorMsg: "",
    labelText: "Message",
    ...REQUIRED_FIELD,
  },
});
