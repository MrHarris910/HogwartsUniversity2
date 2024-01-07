import React from 'react';

import { Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";

const LinkButton = ({ to, text }) => {
  return (
    <Link to={to}>
      <button type="button" class="btn btn-secondary btn-lg mt-3">{text}</button>
    </Link>
  );
};

export default LinkButton;
