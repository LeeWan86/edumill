import * as React from "react";
import {Button} from '../Button';
import {TextField, TextFieldTypes, TextFieldValidationTypes} from '../TextField';
import {Label} from '../Label';
import {Link} from '../Link';
import {Logo, LogoTypes} from '../Logo';
import {Footnote} from '../Footnote';
import {ErrorLabel} from '../ErrorLabel';
import produce from "immer";
import {compose} from 'redux';
import withLoginConnectivity from "../../hoc/withLoginConnectivity";

interface LoginFormProps {}

interface LoginFormState {
  email: string;
  password: string;
}

class _LoginForm extends React.PureComponent<LoginFormProps, LoginFormState> {

  constructor(props:LoginFormProps) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    this.setState(
      produce<LoginFormState>(draft => {
          draft.email = value;
      })
    );
  }

  handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    let value = event.currentTarget.value;
    this.setState(
      produce<LoginFormState>(draft => {
          draft.password = value;
      })
    );
  }

  //Set convention that underscore is to indicate method is private.
  _handleSubmit = (event: React.FormEvent) => {

    const {password, email} = this.state;
    const isValidPassword = (this.refs.password as TextField).validateTextField(password);
    const isValidEmail = (this.refs.email as TextField).validateTextField(email);

    if(isValidPassword && isValidEmail) {
      (this.props as any).connect(email, password);
    }
    event.preventDefault();
  }

  render() {
    const {error, isError} = (this.props as any);
    return (
      <form onSubmit={this._handleSubmit}>
        {isError && <ErrorLabel text={error}/>}
        <TextField text={'Email'} ref='email' placeholder={'Example: john@mail.com'} onChange={this.handleEmail} validation={[TextFieldValidationTypes.Email, TextFieldValidationTypes.Blank]} errorText={'Please enter a valid email. E.g. john@validemail.com'}/>
        <TextField text={'Password'} ref='password'  placeholder={'Enter password'} onChange={this.handlePassword} type={TextFieldTypes.Password} validation={[TextFieldValidationTypes.Blank]} errorText={'Password must not be empty.'}/>
        <Button text={'Log In'}/>
        <Link text={'Forgot your password?'} location={'#'}/>
      </form>
    );
  }
}

export const LoginForm = compose(
  withLoginConnectivity
)(_LoginForm);
