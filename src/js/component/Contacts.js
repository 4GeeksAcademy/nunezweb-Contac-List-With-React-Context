import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/AppContext";
import picProfile from "../../img/picture.jpg";
import "../../styles/contact.css";

const Contacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className="container-fluid m-3 p-3">
      <div>
        <h1 className="text-center text-secondary">Contact List</h1>
        {store.contacts &&
          store.contacts.length > 0 &&
          store.contacts.map((contact) => {
            return (
              <div
                key={contact.id}
                className="card w-100 m-3 border border-3 rounded p-2 text-dark bg-opacity-10"
              >
                <div className="row">
                  <div className="col-3">
                    <img
                      src={picProfile}
                      className="rounded-circle"
                      alt="Picture Profile"
                    />
                  </div>
                  <div className="col-6">
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
                  <div className="d-flex col-3 justify-content-around my-5">
                    <div>
                      <button
                        className="bookmarkBtn"
                        onClick={() => navigate("/edit/" + contact.id)}
                        title="Edit Contact"
                      >
                        <span className="text">Edit</span>
                      </button>
                    </div>
                    <div>
                      <button
                        className="bookmarkBtn"
                        onClick={() => actions.deleteContact(contact.id)}
                        title="Delete Contact"
                      >
                        <span className="text">Delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Contacts;
