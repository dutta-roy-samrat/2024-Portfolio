"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";

import Button from "@components/ui/button";
import TextField from "@components/ui/text-field";

import { isValidEmail } from "@helpers/routes";
import { getFormFieldsInOrder } from "./helpers";

import { DEFAULT_CONTACT_FORM_VALUES } from "./constants";

const ContactMeForm = () => {
  const [formValues, setFormValues] = useState(DEFAULT_CONTACT_FORM_VALUES);

  const { firstName, lastName, email, subject, message } = formValues;

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: { ...prevFormValues[name], value },
    }));
  };

  const handleFieldError = ({ name, errorMsg }: { name: string; errorMsg: string }) => {
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: { ...prevFormValues[name], errorMsg },
    }));
  };

  const validateAndSubmit: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const errorFields = getFormFieldsInOrder(formValues).filter((field) => {
      const { required, emailValidation, value, name, labelText } = field;
      if (required && !value.trim()) {
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
      return firstErrorFieldLabelElement?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    //add email using sendemail
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
