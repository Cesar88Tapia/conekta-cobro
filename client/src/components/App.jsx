import React, {Component} from 'react';
import "./oxxoPay.jsx";
import "./Spei.jsx";
import "./tarjeta.jsx";

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
      <button>Oxxo Pay</button>
      <button>Tarjeta</button>
      <button>Spei</button>
      </div>
    )
  }
};
