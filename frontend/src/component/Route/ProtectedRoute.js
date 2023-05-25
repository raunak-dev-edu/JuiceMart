import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAdmin, children, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
if(!loading ){
  if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  }

  if (isAdmin === true && user.role !== "admin") {
    return <Navigate to="/login" />;
  }

  return <Outlet/>;
}};
//   return (
//     <Fragment>
//       {loading === false && (
//         <Route
//           {...rest}
//           render={(props) => {
//             if (isAuthenticated === false) {
//               return <Navigate to="/login" />;
//             }

//             if (isAdmin === true && user.role !== "admin") {
//               return <Navigate to="/login" />;
//             }

//             return children;
//           }}
//         />
//       )}
//     </Fragment>
//   );
// };

export default ProtectedRoute;
