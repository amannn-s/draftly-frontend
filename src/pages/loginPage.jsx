import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/auth/login",
        {
          email: user.email,
          password: user.password,
        }
      );

      const { success, msg, token, user: userDetails } = response.data;
      alert(msg);

      if (success && user) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userDetails));
        navigate("/");
      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <section className="min-h-screen">
        <div className="container mx-auto px-2 py-10">
          <div className="max-w-xl border border-neutral-100 rounded-lg shadow-md p-4 mx-auto">
            <h1 className="text-2xl md:text-5xl mb-2">Hello, Welcome back</h1>
            <p className="mb-6">
              Don't have an account?
              <Link to="/register" className="ms-2 text-blue-500 underline">
                Register
              </Link>
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 block w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  name="email"
                  value={user.email}
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="pass"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  password
                </label>
                <input
                  type="password"
                  id="pass"
                  className="border border-gray-300 block w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  name="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, [e.target.name]: e.target.value })
                  }
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Logging in..." : "Log in"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
