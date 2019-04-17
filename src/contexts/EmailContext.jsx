import React from "react";
const { Provider, Consumer } = React.createContext();

const FACK_EMAIL_LIST = [
  {
    id: 0,
    sender: "Medium Daily Digest<noreply@medium.com>",
    subject:
      'Build a Drag and Drop layout builder with React and ImmutableJS" published in JavasSCript in Plain English by Chris Kitson',
    body: `Today’s highlights
        Streamline Code Reviews with ESLint + Prettier
        A Shotgun Video Episode
        Eric Elliott in JavaScript Scene4 min read
        Developing Better Node.js Developers
        In the last few months we have been experiencing a huge growth in the NodeJS department at Wolox, for that…
        Matias Pizzagalli in Wolox7 min read`
  },
  {
    id: 1,
    sender: "Jordan Harband<notifications@github.com>",
    subject:
      "Re:[tc39/proposals] [reorg] move stage 1 proposals to separate document (#206)",
    body: `Merged #206 into master.
    
        —
        You are receiving this because you are subscribed to this thread.
        Reply to this email directly, view it on GitHub, or mute the thread.`
  },
  {
    id: 2,
    sender: "Hacker Noon<stories@hackernoon.com>",
    subject: "Programming Language Trends (Q2 2019)",
    body: `In the timeless words of Taylor Swift, “This is a new year. A new beginning. And things will change.” These words could not be more applicable to the world of modern software development. As we move into the second quarter of the year, which programming languages are trending up and to the right?
    
        Before we dive in, here’s an overview of some of the exciting trends to look for throughout this year: Major Programming Trends to Prepare for in 2019 by Constantin.
        
        Finally, here’s a look at some of the specific trends Hacker Noon writers have noticed since the beginning of the year:
        
        `
  }
];

/**
 * 1. 메일을 가져오기
 * 2. 가져와서 저장하기
 */

class EmailProvider extends React.Component {
  state = {
    mails: [...FACK_EMAIL_LIST]
  };

  render() {
    return (
      <Provider value={[...this.state.mails]}>{this.props.children}</Provider>
    );
  }
}

export { EmailProvider, Consumer as EmailConsumer };
