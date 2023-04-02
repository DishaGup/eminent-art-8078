import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let Isauth = localStorage.getItem("Isauth");
  //   const { isAuth } = useSelector((store) => store.authReducer);
  console.log(Isauth);
  const location = useLocation();
  // console.log(location);

  return Isauth ? (
    children
  ) : (
    <Navigate to="/login" state={location.pathname} replace={true} />
  );
};
