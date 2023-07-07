import { Form, Input, IconContainer } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ value, onChange }) => {
  return (
    <Form>
      <IconContainer>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 24 24"
          aria-hidden="true"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      </IconContainer>
      <Input
        type="text"
        value={value}
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
        onChange={onChange}
      />
    </Form>
  );
};

Searchbar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Searchbar;
