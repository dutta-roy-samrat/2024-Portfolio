import { FC, InputHTMLAttributes } from "react";

import ErrorMessage from "@components/shared/error-message";

import defaultStyles from "./main.module.scss";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  labelText?: string;
  name: string;
  value: string;
  required?: boolean;
  styles?: ModularStyles;
  errorMsg: string;
  containerClass?: string;
}

const TextField: FC<TextFieldProps> = ({
  id = "",
  labelText = "",
  name = "",
  value,
  required,
  styles = defaultStyles,
  errorMsg = "",
  containerClass = "",
  ...restProps
}) => (
  <div className={`${styles.textInputContainer} ${containerClass}`}>
    <label htmlFor={id} className={styles.labelClass} id={`${id}-label`}>
      {labelText}
      {required && <div>*</div>}
    </label>
    <input
      id={id}
      type="text"
      name={name}
      className={styles.textInputClass}
      value={value}
      required={required}
      {...restProps}
    />
    {errorMsg && <ErrorMessage errorMsg={errorMsg} />}
  </div>
);

export default TextField;
