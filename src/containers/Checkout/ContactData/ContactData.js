import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import Classes from './ContactData.css';

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (event) => {
      event.preventDefault();
    console.log(this.props.ingredients);
  }

  render() {
    return (
      <div className={Classes.ContactData}>
        <h4>Enter Contact Details</h4>
        <input className={Classes.Input} type="text" name="name" placeholder="Name" />
        <input className={Classes.Input} type="text" name="email" placeholder="Email" />
        <input className={Classes.Input} type="text" name="street" placeholder="Street" />
        <input className={Classes.Input} type="text" name="postalCode" placeholder="PostalCode" />
        <Button btnType="Success" btnClicked={this.orderHandler}>Order</Button>
      </div>
    );
  }
}

export default ContactData;
