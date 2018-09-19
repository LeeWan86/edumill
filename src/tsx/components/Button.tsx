import * as React from "react";

export enum ButtonTypes {
    Button,
    Form
}

export interface TextFieldProps {
  text: string;
  type?: ButtonTypes;
}

export const Button: React.SFC<TextFieldProps> = (props) => {
  function _checkType() {
    switch(props.type) {
      case ButtonTypes.Button:
        return 'button';
      default:
        return 'submit';
    }
  }

  return <input className={'button'} type={_checkType()} value={props.text}/>;
}
