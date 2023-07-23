import { nanoid } from 'nanoid'
import PropTypes from "prop-types";

import css  from "./ContactForm.module.css";

export const ContactForm = ({addContact}) => {

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contactName = event.currentTarget.elements.name.value
    const contactNumber = event.currentTarget.elements.number.value
    const contactId = nanoid()
    addContact(contactName, contactNumber, contactId)
    event.currentTarget.reset()
  }

    return (
      <form className= {css.form} action="add contact" onSubmit={onFormSubmit}>
        <label htmlFor="name" className={css.label}>
          Name
          <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        </label>
        <label htmlFor="number" className={css.label}>
          Number
          <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        </label>
        <button type="submit" className= {css.btn}>Add contact</button>
    </form>
  )
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired
}
