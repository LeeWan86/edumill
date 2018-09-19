import * as React from 'react';
import {compose} from "redux";
import produce from "immer";
import {Loader} from "../components/Loader";
import {LOGIN_PATH} from "../util/Path";

interface Props {}

interface States {
  isLoading: boolean;
  isError: boolean;
  error: string;
}

const withLoginConnectivity = (Component: React.ComponentType) =>
  class withLoginConnectivity extends React.Component<Props, States> {
    constructor(props:Props) {
      super(props);
      this.state = {
        isLoading: false,
        isError: false,
        error: ''
      }
    }

    _connect = (username:string, password:string) => {
      this._startConnection();
      //start from here
      fetch(LOGIN_PATH)
        .then(resp => resp.json())
        .then(data => this._checkForError(data))
        .then(data => this._handleSuccess(data))
        .catch(error => this._handleException(error));
    }

    _checkForError = (data: any) => {
      if(!data || data === undefined) {
        throw Error("No valid data");
      }
    }

    _handleSuccess = (successfulData: any) => {
      this.setState(
        produce<States>(draft => {
            draft.isLoading = false;
        })
      );
    }

    _handleException = (errorText:string) => {
      this.setState(
        produce<States>(draft => {
            draft.isLoading = false;
            draft.isError = true;
            draft.error = '' + errorText;
        })
      );
    }

    _startConnection = () => {
      this.setState(
        produce<States>(draft => {
            draft.isLoading = true;
        })
      );
    }

    _endConnection = () => {
      this.setState(
        produce<States>(draft => {
            draft.isLoading = false;
        })
      );
    }

    render() {
      const {isLoading, isError, error} = this.state;
      const functions = (
        {
          connect: this._connect,
          isError: isError,
          error: error
        } as any); //hack to pass function
      return isLoading ? <Loader/>: <Component {...functions}/>
    }
  }

export default withLoginConnectivity;
