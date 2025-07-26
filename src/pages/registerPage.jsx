import { useState } from "react";
import { Link } from "react-router";

const RegisterPage = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="min-h-screen">
        <div className="container mx-auto px-2 py-10">
          <div className="max-w-xl border border-neutral-100 rounded-lg shadow-md p-4 mx-auto">
            <h1 className="text-2xl md:text-5xl mb-2">Create an account</h1>
            <p className="mb-6">
              Already have an account?
              <Link to="/login" className="ms-2 text-blue-500 underline">
                Log in
              </Link>
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  htmlFor="username"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="border border-gray-300 block w-full py-3 px-4 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
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
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
