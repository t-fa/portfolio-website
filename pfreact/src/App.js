import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bearMode: false
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Introduction name="Tom Fattah" />
      </div>
    );
  } 
}

function Header() {
  return (
    <div className="header">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/contact">Contact</a></li>
        <li id="bearmode"><a>Bear Mode</a></li>
      </ul>
      <a href="https://github.com/t-fa/">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" />
      </a>
    </div>
  );
};

class Introduction extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="introduction">
        <h1>Hi there! I'm {this.props.name}</h1>
        <h2>I build things with my bare hands...using computer science!</h2>
        <p>I can build a custom tailed solution for you using the latest technologies.</p>
        <img className="introimg" src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80" />
      </div>
    )
  }
};

export default App;
