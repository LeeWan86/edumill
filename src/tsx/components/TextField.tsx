import * as React from "react";
import {Label} from "./Label";

export interface TextFieldProps {
  text: string;
  placeholder: string;
}

export const TextField: React.SFC<TextFieldProps> = (props) => {
    return (
      <div>
        <Label text={props.text} />
        <input className={'textfield'} type="text" placeholder={props.placeholder} />
      </div>
    );
}
