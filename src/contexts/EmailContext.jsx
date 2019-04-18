import React from "react";
import * as api from "../api";
import { withNotifiy } from "./NotificationContext";
import { notification } from "antd";

const { Provider, Consumer } = React.createContext();

/**
 * 1. 메일을 가져오기
 * 2. 가져와서 저장하기
 **/

class EmailProvider extends React.Component {
  constructor(props) {
    super(props);

    console.log("EmailProvider props...", props);
    this.state = {
      loading: false,
      emails: [],
      currentEmail: null,
      error: null
    };

    this.timer = null;
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  componentDidMount() {
    this.setState({
      loading: true,
      error: null
    });
    //메일을 가져온다.
    api.fetchEmails().then(emails => {
      console.log("메일 요청 결과...", this, emails);
      this.setState({
        emails,
        loading: false
      });
    });

    this.timer = setInterval(() => {
      api.fetchLatestEmails().then(emails => {
        this.setState({
          emails: [...emails, ...this.state.emails]
        });
        notification.open({
          message: `${emails.length} more emails arrived`
        });
        //this.props.notify(`${emails.length} more emails arrived`);
      });
    }, 500);
  }

  handleSelectEmail = email => {
    console.log("현재 선택한 이메일:", email);
    this.setState({
      currentEmail: email
    });
  };

  render() {
    return (
      <Provider
        value={{
          currentEmail: this.state.currentEmail,
          emails: [...this.state.emails],
          loading: this.state.loading,
          onSelectEmail: this.handleSelectEmail
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}
const WrappingComponent = withNotifiy(EmailProvider);
export { WrappingComponent as EmailProvider, Consumer as EmailConsumer };
