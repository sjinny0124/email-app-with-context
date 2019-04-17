import React from "react";
import * as api from "../api";
const { Provider, Consumer } = React.createContext();

/**
 * 1. 메일을 가져오기
 * 2. 가져와서 저장하기
 **/

class EmailProvider extends React.Component {
  state = {
    loading: false,
    mails: []
  };

  componentDidMount() {
    this.setState({
      loading: true
    });
    //메일을 가져온다.
    api.fetchEmails().then(data => {
      console.log("메일 요청 결과...", this, data);
      this.setState({
        mails: data,
        loading: false
      });
    });
  }

  render() {
    return (
      <Provider
        value={{ emails: [...this.state.mails], loading: this.state.loading }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { EmailProvider, Consumer as EmailConsumer };
