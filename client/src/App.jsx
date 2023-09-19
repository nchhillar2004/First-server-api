import "./App.css";
import Login from "./Routes/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="app">
              <Routes>
                <Route path="/login" Login />
              </Routes>
            </div>
        </Router>
    );
}

export default App;
