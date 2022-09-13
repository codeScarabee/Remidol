import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Header({ title, textColor }) {
  const headerStyle = {
    color: textColor,
    textDecoration: 'none',
  };
  return (
    <header>
      <Link style={headerStyle} to="/">
        <FaCartPlus size={38} color="gold" />
        <h3>{title}</h3>
      </Link>
    </header>
  );
}

Header.defaultProps = {
  title: 'To-Do List from default',
  textColor: 'gold',
};
export default Header;
