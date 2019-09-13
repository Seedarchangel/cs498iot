import React from 'react';
import logo from './logo.svg';
import './App.css';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props)
        //child.push(<Option key={"first"}>first</Option>)
		this.state = {
            ledLightOn: "OFF",
            distance: 0,
		}
	}

  componentDidMount(){

  }
  
  componentWillUnmount() {
  }

  showModal(value) {
  }

  render() {
    return (
    <div>
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The distance of the detected object is: 
          {this.state.distance }
          meters
        </p>
         <p>
          Led lights are: 
          {this.state.ledLightOn}
        </p>
      </header>
 
  </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <Dashboard>
      </Dashboard>
    </div>
  );
}

export default App;
