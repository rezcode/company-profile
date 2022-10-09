import Home from "./Pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
