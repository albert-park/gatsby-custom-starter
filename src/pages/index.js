import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const IndexPage = (props) => (
  <div>
    <h1>{props.headline}</h1>
    <p>{props.paragraph1}</p>
    <p>{props.paragraph2}</p>
    <Link to={props.linkUrl}>{props.linkText}</Link>
  </div>
);

IndexPage.propTypes = {
  headline: PropTypes.string,
  paragraph1: PropTypes.string,
  paragraph2: PropTypes.string,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string
};

IndexPage.defaultProps = {
  headline: 'Hi People',
  paragraph1: 'Welcome to your new Gatsby site.',
  paragraph2: 'Now go build something great.',
  linkText: 'Go to page 2',
  linkUrl: '/page-2/'
};

export default IndexPage;
