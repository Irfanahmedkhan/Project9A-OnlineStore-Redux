import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./Payment.css";

export default class Payment extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  };

  handleInputFocus = (e: { target: { name: any } }) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div id="PaymentForm" className="payment-container">
        <div className="card-details">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
                <input
                
                    type="tel"
                    name="name"
                    placeholder="Name on Card"
                    onChange={this.handleInputChange}
                    onFocus={this.handleInputFocus}
                />
                
                <div 
                    style={{ display: " flex", justifyContent: "space-between" }}

                >
                  
                    <input
                        type="tel"
                        name="expiry"
                        placeholder="Expiry (mm/yy) "
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        style={{ width: " 100px" }}
                        min="1" max="5"
                    />

                    <input
                        type="tel"
                        name="cvc"
                        placeholder="cvc"
                        onChange={this.handleInputChange}
                        onFocus={this.handleInputFocus}
                        style={{ textAlign: "center", width: " 100px" }}

                    />

                    </div>
            
        </div>
        <div className="card">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            // focused={this.state.focus}
            name={this.state.name}
            number={this.state.number}

          />
        </div>
      </div>
    );
  }
}
