export interface DefaultContactFieldType {
  id: string;
  name: string;
  value: string;
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
      labelText: "First Name",
      required: true,
    },
    lastName: {
      id: "lastName",
      name: "lastName",
      value: "",     
      labelText: "Last Name",
      required: true,
    },
    email: {
      id: "email",
      name: "email",
      value: "",     
      labelText: "Email",
      required: true,
    },
    subject: {
      id: "subject",
      name: "subject",
      value: "", 
      labelText: "Subject",
      required: true,
    },
    message: {
      id: "message",
      name: "message",
      value: "", 
      labelText: "Message",
      required: true,
    },
  });
