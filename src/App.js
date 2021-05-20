import React, { useState } from "react";
import "./App.css";
import Login  from "../src/components/login";
import Register from "../src/components/register";
//import forgetPassword from "../src/components/forgetpassword";
import { Programs } from "../src/components/eventspage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return(
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/" exact={true}>
              <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/register">
            <Register showError={updateErrorMessage} updateTitle={updateTitle}/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/programs">
              <Programs />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

/*
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    const eventsPage = isLogginActive ? "eventsPage" : "eventsPage";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
          </div>

          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
        <div className="EventsPage" ref={ref => eventsPage}>
              {isLogginActive && (
                <eventsPage containerRef={ref => (this.eventsPage = ref) } />
              )}
           </div>
            
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

*/

export default App;
