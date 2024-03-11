// components/Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="header-left">
        <Link href="/">
          <a className="app-title">RONEF</a>
        </Link>
      </div>
      <div className="header-right">
        <Link href="/login">
          <a>Login</a>
        </Link>
        <Link href="/signup">
          <a>Sign Up</a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
