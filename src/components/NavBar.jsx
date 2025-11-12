import { Link } from 'react-router-dom';

function NavBar() {
  return (<div>
    <nav className="bg-gray-700 text-white w-screen fixed top-0 left-0 flex items-center justify-between p-4 shadow-md">
     <p> <span className="text-xl font-bold">React Custom Hooks</span>
      <Link to="/" className="ml-5 no-underline text-white hover:underline">
        Home
      </Link></p>
    </nav>
    </div>
  );
}

export default NavBar;
