import { Routes, Route } from "react-router";

import HomePage from "./pages/homePage";
import BlogsPage from "./pages/blogsPage";
import SingleBlogPage from "./pages/singleBlogPage";
import ProfilePage from "./pages/profilePage";
import Navbar from "./components/navbar";
import CreateBlog from "./pages/createBlog";

import Test from "./test";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/registerPage";
import GlobalContextProvider from "./context/globalContext";

const App = () => {
  // return <Test />;

  return (
    <GlobalContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/blogs/:blogId" element={<SingleBlogPage />} />
        <Route path="/blogs/create" element={<CreateBlog />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </GlobalContextProvider>
  );
};

export default App;
