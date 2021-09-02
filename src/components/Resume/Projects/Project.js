import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.project}</a></h4>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

Project.propTypes = {
  data: PropTypes.shape({
    link: PropTypes.string.isRequired,
    project: PropTypes.string.isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default Project;
