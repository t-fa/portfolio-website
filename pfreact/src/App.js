import React from 'react';

function App() {
  return (
    <Header />
  );
}

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
  }
};

export default App;
