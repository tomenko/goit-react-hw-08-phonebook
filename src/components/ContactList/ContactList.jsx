import PropTypes from 'prop-types';

const ContactList = ({ children }) => (
  <ul className="contactList">{children}</ul>
);

ContactList.propTypes = {
  children: PropTypes.node,
};

export default ContactList;

