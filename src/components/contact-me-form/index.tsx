import { DEFAULT_CONTACT_FORM_VALUES } from "@components/contact-me-form/constants";
import { isValidEmail } from "@helpers/routes";
import Button from "@ui/button";
import TextField from "@ui/text-field";
import { useState } from "react";
import { getFormFieldsInOrder } from "./helpers";

const ContactMeForm = () => {
  const [formValues, setFormValues] = useState(DEFAULT_CONTACT_FORM_VALUES);

  const { firstName, lastName, email, subject, message } = formValues;

  const handleFieldChange = (e) => {
    const { value, name } = e.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: { ...prevFormValues[name], value },
    }));
  };

  const handleFieldError = ({ name, errorMsg }) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: { ...prevFormValues[name], errorMsg },
    }));
  };

  const validateAndSubmit = (e) => {
    e.preventDefault();
    const errorFields = getFormFieldsInOrder(formValues).filter((field) => {
      const { required, emailValidation, value, name, labelText } = field;
      if (required && !value) {
        handleFieldError({
          name,
          errorMsg: `${labelText} is required.`,
        });
        return true;
      }
      if (emailValidation && !isValidEmail(value)) {
        handleFieldError({
          name,
          errorMsg: `${labelText} is not valid.`,
        });
        return true;
      }
    });
    if (errorFields[0]) {
      const firstErrorFieldLabelElement = document.getElementById(
        `${errorFields[0].id}-label`
      );
      return firstErrorFieldLabelElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    console.log("xyz");
  };

  return (
    <div>
      <div>
        <TextField {...firstName} onChange={handleFieldChange} />
        <TextField {...lastName} onChange={handleFieldChange} />
      </div>
      <TextField {...email} onChange={handleFieldChange} />
      <TextField {...subject} onChange={handleFieldChange} />
      <TextField {...message} onChange={handleFieldChange} />
      <Button onClick={validateAndSubmit}>Send</Button>
    </div>
  );
};

export default ContactMeForm;
