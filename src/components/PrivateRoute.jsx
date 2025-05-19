// import { Navigate } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";

// const PrivateRoute = ({ children }) => {
//   const { user, loading } = useAuth();

//   if (loading) {
//     // Optional: You can add a spinner or skeleton here
//     return <div className="text-white text-center p-8">Loading...</div>;
//   }

//   if (!user) {
//     // Not logged in? Redirect to login
//     return <Navigate to="/login" replace />;
//   }

//   // User is authenticated
//   return children;
// };

// export default PrivateRoute;

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  if (loading)
    return <div className="text-white text-center p-8">Loading...</div>;

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
