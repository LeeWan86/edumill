import * as React from "react";

export interface LinkProps {
  text: string;
  location: string;
}

export const Link: React.SFC<LinkProps> = (props) => {
    return <div className={'link'}><a href={props.location} >{props.text}</a></div>;
}
