import React from 'react';

function Footer({ title, textColor }) {
  const footerStyle = {
    color: textColor,
  };
  return (
    <footer style={footerStyle}>
      <div>
        <small>Copyright &copy; 2022 {title} Technologies.</small>
      </div>
      <small>Design By - CodeScarabee</small>
    </footer>
  );
}

Footer.defaultProps = {
  title: 'copyright 2022 from default',
  textColor: 'gold',
};

export default Footer;
