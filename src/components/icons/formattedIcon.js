import React from 'react';
import PropTypes from 'prop-types';
import {
  IconGithub,
  IconLinkedin,
  IconInstagram,
  IconTwitter,
} from '@components/icons';

const FormattedIcon = ({ name }) => {
  switch (name) {
    case 'Github':
      return <IconGithub />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconGithub />;
  }
};

FormattedIcon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcon;
