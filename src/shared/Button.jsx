import React from 'react';

function Button({ type, style, children }) {
  return (
    <button type={type} style={style}>
      {children}
    </button>
  );
}

export default Button;
