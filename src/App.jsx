import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Landing } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
