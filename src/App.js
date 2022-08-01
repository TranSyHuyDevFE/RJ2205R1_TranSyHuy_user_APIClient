import "./App.css";
import Create from "./components/create/create";
import Read from "./components/read/read";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Update from "./components/update/update";
import Delete from "./components/delete/delete";

function App() {
  return (
    <Router>
      <div className="main">
        <div>
          <div style={{ marginTop: "40px" }}>
            <Routes path="/read">
              <Route exact path="/" element={<Create />} />
              <Route exact path="/read" element={<Read />} />
              <Route exact path="/update/:userId" element={<Update />} />
              <Route exact path="/delete/:userId" element={<Delete />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
