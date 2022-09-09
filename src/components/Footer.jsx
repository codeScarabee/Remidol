import React from 'react';

function Footer({ title, bgColor, textColor }) {
  const footerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return <footer style={footerStyle}>{title}</footer>;
}

Footer.defaultProps = {
  title: 'copyright 2022 from default',
  bgColor: 'rgba(0,0,0,0.6)',
  textColor: 'gold',
};

export default Footer;
