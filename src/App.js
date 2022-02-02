import "./App.css";
import Home from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./Components/Alert";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";


function App() {
  return (
    <NoteState>
      <Router>
        <Navbar />
        <Alert message="this is ankits alert" />
        <div className="container">
          <Switch>           
            <Route exact path="/"></Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
