import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Contact, GetInTouch, Landing, TeamMember } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/get-in-touch" element={<GetInTouch />} />
        <Route exact path="/team-member" element={<TeamMember />} />
      </Routes>
    </>
  );
}

export default App;
