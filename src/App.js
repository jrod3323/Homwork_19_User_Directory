import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";

function App() {
  return (
    <Router>
        <div>
            <NavTabs />
        </div>
    </Router>
  );
}

export default App;