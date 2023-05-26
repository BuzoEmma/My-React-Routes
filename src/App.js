import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Nomatch from "./components/Nomatch";
import Products from "./components/Products";
import UserDetails from "./components/UserDetails";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import User from "./components/User";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/Auth";
import Login from "./components/Login";
import { RequiredAuth } from "./components/ReqireAuth";
import Logout from "./Logout";
const LazyAbout = React.lazy(() => import("./components/About"));
const App = () => {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading....">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/summary" element={<Summary />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<NewProducts />} />
            <Route path="/products/new" element={<NewProducts />} />
            <Route path="/products/featured" element={<FeaturedProducts />} />
          </Route>

          <Route path="/user" element={<User />}>
            <Route path="admin" element={<Admin />} />
            <Route path=":userId" element={<UserDetails />} />
          </Route>

          <Route
            path="/profile"
            element={
              <RequiredAuth>
                <Profile />
              </RequiredAuth>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
