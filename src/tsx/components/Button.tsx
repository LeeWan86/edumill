import * as React from "react";

export interface TextFieldProps {
  text: string;
}

export const Button: React.SFC<TextFieldProps> = (props) => {
    return <input className={'button'} type="submit" value={props.text}/>;
}
