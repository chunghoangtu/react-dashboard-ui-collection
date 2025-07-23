import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="p-4 bg-gray-800 text-white flex justify-between">
      <h1>My App</h1>
      <nav>
        <Link to="/" className="mr-4">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
