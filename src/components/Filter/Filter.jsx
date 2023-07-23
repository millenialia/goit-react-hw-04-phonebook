import PropTypes from "prop-types";
import css  from "./Filter.module.css";

export const Filter = ({filter, handleChange, inputRef}) => {
    return (
        <label htmlFor="filter" className= {css.filter}>
          Find contacts by name
        <input
          type="text"
          name="filter"
          ref={inputRef}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={handleChange}
          value={filter}
        />
      </label>
  )
}

Filter.propTypes = {
  inputRef: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
