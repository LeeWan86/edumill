import * as React from "react";

export interface FootnoteProps {
  text: string;
}

export const Footnote: React.SFC<FootnoteProps> = (props) => {
    return <label className={'footnote'}>{props.text}</label>;
}
