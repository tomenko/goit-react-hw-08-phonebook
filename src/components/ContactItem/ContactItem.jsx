import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteContact, getFilteredContactList } from '../../redux/contacts';

const ContactItem = ({ onDelete, contactsItems }) => (
  <>
    {contactsItems.map(({ id, name, number }) => {
      return (
        <li key={id}>
          <p>{`${name}: ${number}`}</p>
          <button type="button" onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      );
    })}
  </>
);

const mapStateToProps = state => ({
  contactsItems: getFilteredContactList(state),
});

const mapDispatchFromProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchFromProps)(ContactItem);

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};