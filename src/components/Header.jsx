import React from 'react';

function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h1>{title}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  title: 'To-Do List from default',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#e44332',
};
export default Header;
