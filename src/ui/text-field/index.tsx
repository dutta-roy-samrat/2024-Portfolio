import defaultStyles from "./main.module.scss";

const TextField = ({
  id = "",
  labelText = "",
  name = "",
  value,
  required,
  styles = defaultStyles,
  ...restProps
}) => (
  <div className={styles.containerClass}>
    <label htmlFor={id} className={styles.labelClass} id={`${id}-label`}>
      {labelText}
      {required && <div>*</div>}
    </label>
    <input
      id={id}
      type="text"
      name={name}
      className={styles.inputClass}
      value={value}
      required={required}
      {...restProps}
    />
  </div>
);

export default TextField;
