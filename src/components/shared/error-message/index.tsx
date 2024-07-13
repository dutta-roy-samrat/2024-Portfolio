import { ReactElement } from "react";

import styles from "./main.module.scss";

const ErrorMessage = ({
  errorMsg,
}: {
  errorMsg: string;
}): ReactElement | null => {
  if (!errorMsg) return null;
  return <div className={styles.errorMsg}>{errorMsg}</div>;
};

export default ErrorMessage;
