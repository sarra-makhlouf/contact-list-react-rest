import { Link } from "react-router-dom";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileAlt } from "@fortawesome/free-solid-svg-icons";

class ContactCard extends Component {
  render() {
    return (
      <div className="contact-card">
        <p className="card-title">{this.props.contact.name}</p>
        <div className="card-text">
          <h4>
            <FontAwesomeIcon icon={faMobileAlt} /> Phone:
          </h4>
          <p>{this.props.contact.phone}</p>
          <h4>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </h4>
          <p>{this.props.contact.email}</p>
        </div>
        <div className="buttons">
          <Link to="/edit-contact">
            <input
              type="button"
              value="Edit"
              className="edit-button"
              modifyContact={this.props.modifyContact}
              onClick={()=>this.props.modal(false, this.props.contact)}              
            />
          </Link>
          <input
            type="button"
            value="Delete"
            className="edit-button"
            onClick={() => {
              this.props.deleteContact(this.props.contact._id);
            }}
          />
        </div>
      </div>
    );
  }
}
export default ContactCard;
