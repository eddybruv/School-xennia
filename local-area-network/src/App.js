import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Symmetric from "./pages/Symmetric";
import Asymetric from "./pages/Asymetric";

function App() {
  return (
    <div className="App container">
      <Router>
        <Routes>
          <Route exact path="/async" element={<Asymetric/>} />
          <Route exact path="/" component={Symmetric} element={<Symmetric />} />
          <Route exact path="/sync" component={Symmetric} element={<Symmetric />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
