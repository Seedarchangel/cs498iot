import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

export class Dashboard extends React.Component {
	constructor(props) {
		super(props)
        //child.push(<Option key={"first"}>first</Option>)
		this.state = {
            ledLightOn: "OFF",
            distance: 0,
		}
    this.refreshDashboard = this.refreshDashboard.bind(this)
	}


  
  refreshDashboard() {
    axios.get(`http://localhost:8080/api/dashboard`).then(res=>{
                 this.setState({distance: res.data.distance, ledLightOn: res.data.led})
                 //(<Option key={"first"}>first</Option>)
            })
    }

  componentDidMount(){
    this.interval = setInterval(() => this.refreshDashboard(), 5000);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
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
