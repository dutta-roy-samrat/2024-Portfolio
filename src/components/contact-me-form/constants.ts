export interface DefaultContactFieldType {
  id: string;
  name: string;
  value: string;
  errorMsg: string;
  labelText: string;
  required?: boolean;
}

export type DefaultContactFormValueType = {
  [name: string]: DefaultContactFieldType;
};

export const DEFAULT_CONTACT_FORM_VALUES: DefaultContactFormValueType =
  Object.freeze({
    firstName: {
      id: "firstName",
      name: "firstName",
      value: "",
      errorMsg: "",
      labelText: "First Name",
      required: true,
    },
    lastName: {
      id: "lastName",
      name: "lastName",
      value: "",
      errorMsg: "",
      labelText: "Last Name",
      required: true,
    },
    email: {
      id: "email",
      name: "email",
      value: "",
      errorMsg: "",
      labelText: "Email",
      required: true,
    },
    subject: {
      id: "subject",
      name: "subject",
      value: "",
      errorMsg: "",
      labelText: "Subject",
      required: true,
    },
    message: {
      id: "message",
      name: "message",
      value: "",
      errorMsg: "",
      labelText: "Message",
      required: true,
    },
  });
