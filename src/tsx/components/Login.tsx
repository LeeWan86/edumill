import * as React from "react";
import {Button} from './Button';
import {TextField} from './TextField';
import {Label} from './Label';
import {Link} from './Link';
import {Logo, LogoTypes} from './Logo';
import {Footnote} from './Footnote';

export class Login extends React.Component<{}, {}> {
    render() {
        return (
            <div>
              <div className="login">
                  <Logo type={LogoTypes.EduMill}/>
                  <div className={"login-welcome"}>Welcome back to EduMill. Let's get you settled.</div>
                  <form className="form">
                      <h1>Log In</h1>
                      <TextField text={'Email'} placeholder={'Example: john@mail.com'}/>
                      <TextField text={'Password'} placeholder={'Enter password'}/>
                      <Button text={'Log In'}/>
                      <Link text={'Forgot your password?'} location={'#'}/>
                  </form>
                  <Footnote text={'© 2018 Copyright Indigo Education Group'} />
                </div>
            </div>
        );
    }
}
