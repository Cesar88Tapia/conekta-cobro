import React, {Component} from 'react';
import Axios from "axios";
//import conekta from "./config/conekta.js";
// import "./oxxoPay.jsx";
// import "./Spei.jsx";
// import "./tarjeta.jsx";

const API = "key_eYvWV7gSDkNYXsmr"

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }

  getPaymentMethod() {
    axios.get(API)
    .then(result  => {
      this.setState({
        data: result.data
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }



  render() {
    return (
      <div>
      <button className="oxxo" >Oxxo Pay</button>
      <button className="tarjeta" >Tarjeta</button>
      <button className="spei" >Spei</button>
      </div>
    )
  }
};
