import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Sistema Solar</h1>
        <p>
          <a href="#saiba-mais" className="button"> Saiba Mais </a>
        </p>
      </header>
    );
  }
}

export default Header;
