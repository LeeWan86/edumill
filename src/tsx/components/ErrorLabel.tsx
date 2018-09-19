import * as React from "react";

export interface ErrorLabelProps {
  text: string;
}

export const ErrorLabel: React.SFC<ErrorLabelProps> = (props) => {
    return <div className={'error-label'}>{props.text}</div>;
}
