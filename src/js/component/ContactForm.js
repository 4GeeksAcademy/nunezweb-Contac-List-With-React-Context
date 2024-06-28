import React, { useState, useEffect, useContext } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Context } from "../store/AppContext";
import "../../styles/contactform.css";

const ContactForm = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const navigate = useNavigate();
  const params = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevenir comportamiento predeterminado del formulario
    let response;
    if (!params.id) {
      response = await actions.addContact(contact);
    } else {
      response = await actions.editContact(contact, params.id);
    }
    if (response) {
      navigate("/");
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (params.id) {
      const existingContact = store.contacts.find(contact => contact.id == params.id);
      if (existingContact) {
        setContact(existingContact);
      }
    }
  }, [params.id, store.contacts]);

  return (
    <>
<div className="m-5">
  <div>
    <Link className="linkTo" to="/">
      <span className="backTo">Back to Contact List</span>
    </Link>
  </div>
</div>

<div className="container">
        <div className="row justify-content-center">
          <div className="col-12">

      <form className="pb-5" onSubmit={handleSubmit}>
        <h1>{!params.id ? "Add a new contact" : "Edit contact " + params.id}</h1>
        <div className="form-floating mb-3">
          <input onChange={(e) => setContact({ ...contact, name: e.target.value })} type="text" className="form-control" name="name" value={contact.name} id="inputName" placeholder="Enter Name" />
          <label htmlFor="inputName">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => setContact({ ...contact, email: e.target.value })} type="email" className="form-control" name="email" value={contact.email} id="inputEmail" placeholder="Enter Email" />
          <label htmlFor="inputEmail">Email</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => setContact({ ...contact, phone: e.target.value })} value={contact.phone} name="phone" type="number" className="form-control" id="inputPhone" placeholder="Enter Phone" />
          <label htmlFor="inputPhone">Phone</label>
        </div>
        <div className="form-floating mb-3">
          <input onChange={(e) => setContact({ ...contact, address: e.target.value })} value={contact.address} name="address" type="text" className="form-control" id="inputAddress" placeholder="Enter Address" />
          <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
        </div>
        <div className="">
          <button type="submit" className="btn btn-primary">Save</button>
        </div>
      </form>
      </div>
      </div>
      </div>
    </>
  );
};

export default ContactForm;