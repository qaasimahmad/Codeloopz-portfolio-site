import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, Landing } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
