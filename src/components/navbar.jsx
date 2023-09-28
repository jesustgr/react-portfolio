import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    display: 'flex',
    justifyContent: 'end',
    backgroundColor: 'white',
    listStyle: 'none',
    padding: '20px',
  };

  const linkStyleOne = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '700',
    padding: '20px 20px',
    fontSize: '19px',
    marginRight: '30px',
  };

  const linkStyleTwo = {
    textDecoration: 'none',
    color: 'black',
    fontWeight: '600',
    padding: '20px 20px',
    fontSize: '18px',
    marginRight: '30px',
    opacity: '50%'
  };

  const currentPage = useLocation().pathname;
 
  return (
    <div  style={navStyle}>
      {(currentPage === '/') ? (
        <Link to="/" style={linkStyleOne}>
          About Me
        </Link>
      ) : (
        <Link to="/" style={linkStyleTwo}>
          About Me
        </Link>
      )}

      {(currentPage === '/Projects') ? (
        <Link to="/Projects" style={linkStyleOne}>
          Projects
        </Link>
      ) : (
        <Link to="/Projects" style={linkStyleTwo}>
          Projects
        </Link>
      )}

      {(currentPage === '/Contact') ? (
        <Link to="/Contact" style={linkStyleOne}>
          Contact
        </Link>
      ) : (
        <Link to="/Contact" style={linkStyleTwo}>
          Contact
        </Link>
      )}

      {(currentPage === '/Resume') ? (
        <Link to="/Resume" style={linkStyleOne}>
          Resume
        </Link>
      ) : (
        <Link to="/Resume" style={linkStyleTwo}>
          Resume
        </Link>
      )}

    </div>
  );
}

export default Navbar;