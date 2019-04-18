import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
const { Provider, Consumer } = React.createContext();

const NotiBox = styled.div`
  position: relative;

  > ul {
    position: absolute;
    top: 10px;
    right: 6px;
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style: none;

    > li {
      position: relative;
      background: #fff;
      max-width: 300px;
      display: flex;
      padding: 10px;
      padding-right: 30px;
      border: 1px solid #ccc;
      margin-bottom: 5px;
      border-radius: 3px;

      > button {
        position: absolute;
        top: 3px;
        right: 3px;
        border: none;
        border-radius: 50%;
        background-color: #ccc;
        line-height: 0;
        width: 1em;
        height: 1em;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        cursor: pointer;
        outline: none;

        &:hover {
          background-color: #d32f2f;
        }
      }
    }
  }
`;

class NotificationProvider extends React.Component {
  state = {
    messages: []
  };

  handleAddMessage = text => {
    console.log("----핸들 메시지", text);
    this.setState(state => ({
      messages: [
        ...state.messages,
        {
          id: Math.random(),
          text,
          addedAt: new Date().getTime()
        }
      ]
    }));
  };

  removeMessage = message => {
    //비동기 콜백
    //filter는 muttable 메소드 -> 새로운 array 반환
    this.setState(state => ({
      messages: state.messages.filter(m => m.id !== message.id)
    }));
  };

  render() {
    return (
      <Provider
        value={{
          onAddMessage: this.handleAddMessage,
          ...this.state
        }}
      >
        <NotiBox className="notification-wrapper">
          <ul>
            {this.state.messages.map(message => {
              console.log("----->", message);
              return (
                <li key={message.id}>
                  {message.text}
                  <Icon
                    type="close"
                    onClick={e => {
                      this.removeMessage(message);
                    }}
                  />
                </li>
              );
            })}
          </ul>
          {this.props.children}
        </NotiBox>
      </Provider>
    );
  }
}

/**
 * 콜백 함수 하나를 주입한다.
 */
function withNotifiy(BaseComponent) {
  return function(props) {
    return (
      <Consumer>
        {({ onAddMessage }) => {
          return (
            <BaseComponent
              {...props}
              notify={msg => {
                onAddMessage(msg);
              }}
            />
          );
        }}
      </Consumer>
    );
  };
}

export { NotificationProvider, withNotifiy };
