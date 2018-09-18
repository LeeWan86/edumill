import * as React from "react";

export interface LabelProps {
  text: string;
}

export const Label: React.SFC<LabelProps> = (props) => {
    return <label className={'label'}>{props.text}</label>;
}
