import { FaCartPlus } from 'react-icons/fa';

function Header({ title, bgColor, textColor }) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyle}>
      <FaCartPlus size={48} />
      <h1>{title}</h1>
    </header>
  );
}

Header.defaultProps = {
  title: 'To-Do List from default',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: 'gold',
};
export default Header;
