import { Link } from "react-router-dom";
import logo from "../constants/logo/fifa.svg";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.loginn);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#eae494",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link to={"/"}>
          <img
            src={logo}
            alt=""
            style={{ marginLeft: "20px", height: "50px" }}
          />
        </Link>
        <div style={{ marginRight: "30px", gap: "20px", display: "flex" }}>
          {loggedIn ? (
            <>
              <p
                style={{
                  backgroundColor: "#c49d9d",
                  margin: 0,
                  padding: "5px",
                }}
              >
                {user.username}
              </p>
              <Link to={""}>
                <button
                  className="btn btn-outline-danger"
                  style={{ paddingBottom: "8px" }}
                >
                  Logout
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="btn btn-outline-primary">Login</button>
              </Link>
              <Link to={"/register"}>
                <button className="btn btn-outline-primary">Register</button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
