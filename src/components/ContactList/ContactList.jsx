import PropTypes from "prop-types";
import css  from "./ContactList.module.css";

export const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <ul className= {css.contactNameList}>
      {filteredContacts.map(({contactName, contactNumber, contactId}) => {
        return (
          <li key={contactId} className= {css.contactName}>
            <p>{contactName}: {contactNumber}</p>
            <button type="button" onClick={deleteContact} id={contactId} className= {css.delete}>Delete</button>
          </li>
        )
      })}
    </ul>
)
}

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired
}
