import * as React from "react";
import {Logo, LogoTypes} from '../Logo';
import {Footnote} from '../Footnote';
import {LoginForm} from './LoginForm';
import withLoginConnectivity from "../../hoc/withLoginConnectivity";

interface LoginProps {}

export const Login: React.SFC<LoginProps> = (props) => {
  return (
    <div className="login">
      <Logo type={LogoTypes.EduMill}/>
      <div className={"login-welcome"}>Welcome back to EduMill. Let's get you settled.</div>
      <div className={"container"}>
        <h1>Log In</h1>
        <LoginForm/>
      </div>
      <Footnote text={'© 2018 Copyright Indigo Education Group'} />
    </div>
  );
}
