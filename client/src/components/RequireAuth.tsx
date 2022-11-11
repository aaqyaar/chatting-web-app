import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth() {
  const isAuth = false;
  const location = useLocation();

  return isAuth ? (
    <Outlet />
  ) : isAuth ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate
      to={`/auth/login?next=${location.pathname}`}
      state={{ from: location }}
      replace
    />
  );
}
