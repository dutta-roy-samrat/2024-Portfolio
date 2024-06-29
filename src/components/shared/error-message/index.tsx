import { ReactElement } from "react";

const ErrorMessage = ({ errorMsg }: { errorMsg: string }): ReactElement | null => {
    if (!errorMsg) return null;
    return <div>{errorMsg}</div>
}

export default ErrorMessage;