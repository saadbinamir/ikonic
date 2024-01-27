import React from "react";
import Logo from "../assets/ikon.png";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/Auth";
export default function NavBar() {
  const auth = useAuth();

  const handleLogout = async () => {
    await auth.logout();
    // navigate("/");3
  };

  return (
    <header
      className="shadow-lg"
      style={{ backgroundColor: "#2F2F2F", zIndex: 100 }}
    >
      <div className="container max-w-screen-xl mx-auto flex flex-wrap p-5  md:flex-row items-center justify-between">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 z-50"
        >
          <img src={Logo} className="w-10" alt="Logo" />
          <span
            className="ml-3 text-xl md:block hidden"
            style={{ color: "#C39601" }}
          >
            IkonicInsights
          </span>
        </Link>

        {auth.user ? (
          <div>
            <Link
              onClick={handleLogout}
              className="mx-11 py-2 px-4 rounded-2xl z-50"
              style={{ color: "#F6F6F6", transition: "1ms" }}
              onMouseEnter={(e) => {
                e.target.style.borderBottom = "2px solid #C39601";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderBottom = "0px";
              }}
            >
              Logout
            </Link>
            <Link
              to={"/dash"}
              className=" py-2 px-4 rounded-2xl z-50"
              style={{
                color: "#C39601",
                transition: "1ms",
                border: "2px solid #C39601",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#C39601";
                e.target.style.color = "#111111";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "initial";
                e.target.style.color = "#C39601";
              }}
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div>
            <Link
              to={"/"}
              // onClick={Login}
              className="mx-11 py-2 px-4 rounded-2xl z-50"
              style={{ color: "#F6F6F6", transition: "1ms" }}
              onMouseEnter={(e) => {
                e.target.style.borderBottom = "2px solid #C39601";
              }}
              onMouseLeave={(e) => {
                e.target.style.borderBottom = "0px";
              }}
            >
              Login
            </Link>
            <Link
              to={"/create_acc"}
              className=" py-2 px-4 rounded-2xl z-50"
              style={{
                color: "#C39601",
                transition: "1ms",
                border: "2px solid #C39601",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#C39601";
                e.target.style.color = "#111111";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "initial";
                e.target.style.color = "#C39601";
              }}
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}