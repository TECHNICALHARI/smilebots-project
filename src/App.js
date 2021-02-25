import React, { Component } from "react";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rooms: 1,
      disabledValue: false,
      adults: 1,
      children: 0,
    };
    this.DecrementRoom = this.DecrementRoom.bind(this);
    this.IncrementRoom = this.IncrementRoom.bind(this);
    this.DecrementAdults = this.DecrementAdults.bind(this);
    this.IncrementAdults = this.IncrementAdults.bind(this);
    this.decrementChild = this.decrementChild.bind(this);
    this.IncrementChild = this.IncrementChild.bind(this);
    
  }

  DecrementRoom() {
    if (this.state.rooms > 1) {
      this.setState({
        rooms: this.state.rooms - 1,
      });
      if (this.state.rooms ===1) {
        this.setState({
          disabledValue : !this.state.disabledValue
        })
      }
    }
  }

  IncrementRoom() {
    if (this.state.rooms < 5) {
      this.setState({
        rooms: this.state.rooms + 1,
      });

      if (this.state.rooms===5) {
        this.setState({
          disabledValue : !this.state.disabledValue 
        })
      }

    }
  }

  DecrementAdults(){
    if (this.state.adults > 1) {
      this.setState({
        adults : this.state.adults - 1
      }) 
      if (this.state.adults === 1) {
        this.setState({
          disabledValue : !this.state.disabledValue
        })
      }
    }
  }
  IncrementAdults(){
    if ((this.state.adults+this.state.children) < 4) {
      this.setState({
        adults : this.state.adults + 1
      }) 
    }
    else if ((this.state.rooms) ) {
      
    }
  }

  decrementChild(){
    if (this.state.children > 0) {
      this.setState({
        children: this.state.children - 1
      })
    }
  }

  IncrementChild(){
    if ((this.state.adults+this.state.children) < 4) {
      this.setState({
        children : this.state.children + 1
      })
    }
  }


  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="header">
            <i class="fas fa-users" aria-hidden="true"></i>
            <h2>
              Choose number of <span style={{ color: "#04045c" }}>people</span>{" "}
            </h2>
          </div>
          <div className="contents">
            <div className="rooms">
              <div className="rooms-header">
                <i class="fas fa-bed"></i>
                <h3>ROOMS</h3>
              </div>
              <div className="rooms-button">
                <button
                  type="button"
                  className="btn-min"
                  onClick={this.DecrementRoom}
                  disabled={this.state.disabledValue}
                >
                  -
                </button>
                <h4 className="count">{this.state.rooms}</h4>
                <button
                  type="button"
                  className="btn-plus"
                  onClick={this.IncrementRoom}
                  disabled={this.state.disabledValue}
                >
                  +
                </button>
              </div>
            </div>
            <div className="rooms">
              <div className="rooms-header">
                <i class="fas fa-user" aria-hidden="true"></i>
                <h3>Adults</h3>
              </div>
              <div className="rooms-button">
                <button
                  type="button"
                  className="btn-min"
                  onClick={this.DecrementAdults}
                  disabled={this.state.disabledValue}
                >
                  -
                </button>
                <h4 className="count">{this.state.adults}</h4>
                <button
                  type="button"
                  className="btn-plus"
                  onClick={this.IncrementAdults}
                  disabled={this.state.disabledValue}
                >
                  +
                </button>
              </div>
            </div>
            <div className="children">
              <div className="rooms-header">
                <i class="fas fa-child" aria-hidden="true"></i>
                <h3>Children</h3>
              </div>
              <div className="rooms-button">
                <button
                 type="button"
                  className="btn-min"
                  onClick={this.decrementChild}
                  disabled={this.state.disabledValue}
                  >
                  -
                </button>
                <h4 className="count">{this.state.children}</h4>
                <button 
                type="button"
                 className="btn-plus"
                 onClick={this.IncrementChild}
                 disabled={this.state.disabledValue}
                 >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
