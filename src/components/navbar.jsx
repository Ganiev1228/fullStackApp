import { Link, useNavigate } from "react-router-dom";
import logo from "../constants/logo/fifa.svg";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../helpers/persistance-storage";
import { logOut } from "../slice/login-auth";
const Navbar = () => {
  const { loggedIn, user } = useSelector((state) => state.loginn);
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Logout = (()=>{
    dispatch(logOut())
    removeItem('token')
    navigate('/login')
  })
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
                <button
                  className="btn btn-outline-danger"
                  style={{ paddingBottom: "8px" }}
                  onClick={Logout}
                >
                  Logout
                </button>
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
