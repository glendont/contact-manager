import React, { Fragment, useContext, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import ContactItem from "./ContactItem";
import ContactContext from "../../context/contact/contactContext";

import Spinner from "../layout/Spinner";
const Contacts = () => {
  const contactContext = useContext(ContactContext);

  const { contacts, filtered, getContacts, loading } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  if (contacts === null) {
    return <h4> Please add a contact </h4>;
  }

  if (filtered) {
    return (
      <Fragment>
        {contacts != null && !loading ? (
          <TransitionGroup>
            {filtered.map((contact) => (
              <CSSTransition key={contact._id} timeout={500} classNames="item">
                <ContactItem contact={contact} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        ) : (
          <Spinner />
        )}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <TransitionGroup>
          {contacts.map((contact) => (
            <CSSTransition key={contact._id} timeout={500} classNames="item">
              <ContactItem contact={contact} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Fragment>
    );
  }
};
export default Contacts;
