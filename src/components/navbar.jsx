import { Link, NavLink, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <header className="py-4">
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold italic">
            <Link to="/">Draflty</Link>
          </h1>

          <nav>
            <ul className="flex gap-4">
              <li>
                <NavLink to="/" className="text-lg">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="text-lg">
                  Blogs
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile" className="text-lg">
                  Profile
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2">
            <button
              className="text-base bg-neutral-800 hover:bg-neutral-700 transition-colors text-white px-4 py-1 rounded-full"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button
              className="text-base bg-neutral-200 hover:bg-neutral-300 transition-colors text-black px-4 py-1 rounded-full"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
