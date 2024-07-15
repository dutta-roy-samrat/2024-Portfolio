"use client";

import { ChangeEventHandler, MouseEventHandler, useState } from "react";

import Button from "@components/ui/button";
import TextField from "@components/ui/text-field";
import Card from "@components/ui/card";

import { isValidEmail } from "@helpers/routes";
import { getFormFieldsInOrder } from "./helpers";

import { DEFAULT_CONTACT_FORM_VALUES } from "./constants";

import styles from "./main.module.scss";

const defaultObj: DefaultObjType = {};

const ContactMeForm = () => {
  const [formValues, setFormValues] = useState(DEFAULT_CONTACT_FORM_VALUES);
  const [formErrors, setFormErrors] = useState(defaultObj);

  const { firstName, lastName, email, subject, message } = formValues;

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value, name } = e.target;

    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: { ...prevFormValues[name], value },
    }));
  };

  const validateAndSubmit = () => {
    const errors: DefaultObjType = {};
    let firstErrorLabelId;
    getFormFieldsInOrder(formValues).forEach(
      ({ value, required, name, labelText, id }) => {
        if (value) return;
        if (!Object.keys(errors).length) {
          firstErrorLabelId = `${id}-label`;
        }
        if (required) errors[name] = `${labelText} is required`;
        if (name === "email" && isValidEmail(email))
          errors[name] = `Enter a valid email`;
      }
    );
    if (Object.keys(errors).length) {
      window.scroll({
        top: document.querySelector(`#email-label`)?.getBoundingClientRect()
          ?.top,
        behavior: "smooth",
      });
      return setFormErrors(errors);
    }
  };

  return (
    <Card>
      <div className={styles.inputGroup}>
        <TextField
          {...firstName}
          onChange={handleFieldChange}
          // containerClass={styles.containerClass}
          errorMsg={formErrors?.firstName}
        />
        <TextField
          {...lastName}
          onChange={handleFieldChange}
          // containerClass={styles.containerClass}
          errorMsg={formErrors?.lastName}
        />
      </div>

      <TextField
        {...email}
        onChange={handleFieldChange}
        errorMsg={formErrors?.email}
      />
      <TextField
        {...subject}
        onChange={handleFieldChange}
        errorMsg={formErrors?.subject}
      />
      <TextField
        {...message}
        onChange={handleFieldChange}
        errorMsg={formErrors?.message}
      />
      <Button onClick={validateAndSubmit}>Send</Button>
    </Card>
  );
};

export default ContactMeForm;
