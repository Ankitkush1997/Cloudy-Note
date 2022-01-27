import "./App.css";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
