import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
      <Link to="/profiles/Kjw">강준원의 프로필</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;