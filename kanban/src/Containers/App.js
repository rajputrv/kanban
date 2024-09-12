import { Component } from "react";
import "./App.css";
import Cardlist from "../Components/Cardlist";
import Displaybar from "../Components/Displaybar";
import Navbar from "../Components/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      users: [],
      grouping: "default",
      ordering: "default",
    };
  }

  componentDidMount() {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment")
      .then((response) => response.json())
      .then((tickets) => {
        this.setState({ tickets: tickets });
      })
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    const { tickets, users, grouping, ordering } = this.state;
    // const grouped_and_ordered

    return !tickets.length ? (
      <h1>Loading...</h1>
    ) : (
      <div id="App-main">
        <Displaybar />
        <Navbar />
        <Cardlist tickets={tickets} />
      </div>
    );
  }
}

export default App;
