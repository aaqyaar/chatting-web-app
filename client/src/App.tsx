import NotFound from "pages/404";
import Home from "pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      {/* <Route path="/contacts" element={<Contacts />} /> */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
