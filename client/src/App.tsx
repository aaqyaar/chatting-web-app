import RequireAuth from "components/RequireAuth";
import NotFound from "pages/404";
import Home from "pages/Home";
import Login from "pages/Login";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/auth/login" element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path="/" index element={<Home />} />
        {/* <Route path="/contacts" element={<Contacts />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
