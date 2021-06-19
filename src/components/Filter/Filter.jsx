import { connect } from 'react-redux';
import { changeFilter, getFilterValue } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChange}></input>
  </label>
);

const mapStateToProps = state => ({
  value: getFilterValue(state),
});

const mapDispatchFromProps = dispatch => ({
  onChange: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(Filter);

