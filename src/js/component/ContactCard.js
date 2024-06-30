import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/contact.css";
import picProfile from "../../img/picture.jpg";
import { useContext } from "react";
import { Context } from "../store/AppContext";
import "../../styles/contactform.css";


const ContactCard = ({ contact }) => {
  const navigate = useNavigate();
  const { actions } = useContext(Context);

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    actions.deleteContact(id);
  };

  return (

      <div className="card border-3 rounded text-dark m-5 p-3">
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img
              src={picProfile}
              className="rounded-circle img-fluid"
              alt="Picture Profile"
            />
          </div>
          <div className="col">
            <div className="card-body">
              <h5 className="card-title">
                <span className="border-bottom">{contact.name}</span>
              </h5>
              <p className="card-text">
              <i class="fas fa-map-marker-alt">&nbsp;&nbsp;</i>
                <span className="border-bottom">{contact.address}</span>
              </p>
              <p className="card-text">
              <i class="fas fa-phone">&nbsp;&nbsp;</i>
                <small className="text-body-secondary">
                  <span className="border-bottom">{contact.phone}</span>
                </small>
              </p>
              <p className="card-text">
              <i class="fas fa-envelope">&nbsp;&nbsp;</i>
                <small className="text-body-secondary">
                  <span className="border-bottom">{contact.email}</span>
                </small>
              </p>
            </div>
          </div>
          <div className="col col-md-3 d-flex flex-column justify-content-center align-items-center">
            <button
              className="bookmarkBtn my-2"
              onClick={() => handleEdit(contact.id)}
              title="Edit Contact"
            >
              <span className="text">Edit</span>
            </button>
            <button
              className="bookmarkBtn my-2"
              onClick={() => handleDelete(contact.id)}
              title="Delete Contact"
            >
              <span className="text">Delete</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default ContactCard;


{/* <div className="container-fluid m-3 p-3">
<div className="card border border-3 rounded p-2 text-dark">
  <div className="row">
    <div className="col-12 col-md-3 text-center">
      <img
        src={picProfile}
        className="rounded-circle img-fluid"
        alt="Picture Profile"
      />
    </div>
    <div className="col-12 col-md-6 text-center">
      <div className="card-body">
        <h5 className="card-title">
          <span className="border-bottom">{contact.name}</span>
        </h5>
        <p className="card-text">
          <span className="border-bottom">{contact.address}</span>
        </p>
        <p className="card-text">
          <small className="text-body-secondary">
            <span className="border-bottom">{contact.phone}</span>
          </small>
        </p>
        <p className="card-text">
          <small className="text-body-secondary">
            <span className="border-bottom">{contact.email}</span>
          </small>
        </p>
      </div>
    </div>
    <div className="col-12 col-md-3 d-flex flex-column justify-content-center align-items-center">
      <button
        className="bookmarkBtn my-2"
        onClick={() => handleEdit(contact.id)}
        title="Edit Contact"
      >
        <span className="text">Edit</span>
      </button>
      <button
        className="bookmarkBtn my-2"
        onClick={() => handleDelete(contact.id)}
        title="Delete Contact"
      >
        <span className="text">Delete</span>
      </button>
    </div>
  </div>
</div>
</div> */}