import * as React from "react";

export enum LogoTypes {
    EduMill
}

export interface LogoProps {
  type: LogoTypes;
}

export const Logo: React.SFC<LogoProps> = (props) => {
  function _checkType() {
    switch(props.type) {
      case LogoTypes.EduMill:
        return '../img/logo/edumill.svg';
      default:
        return '';
    }
  }

  return <img src={_checkType()}/>
}
