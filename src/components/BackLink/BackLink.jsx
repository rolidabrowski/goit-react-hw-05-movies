import { StyledLink } from './BackLink.styled';
import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';

export const BackLink = ({ to, children }) => {
  return (
    <StyledLink to={to}>
      <HiArrowLeft size="24" />
      {children}
    </StyledLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default BackLink;
