import PropTypes from "prop-types"
const Filter = ({ handelFilter, filter }) => (
  <div>
    {/* <p>Find contacts by name</p> */}
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handelFilter}
    ></input>
  </div>
);
Filter.propTypes = {
  filter: PropTypes.string,
  handelFilter: PropTypes.func,
};
export default Filter;
