import React from 'react';
import PropTypes from 'prop-types';

import Job from './Projects/Project';

const Project = ({ data }) => (
  <div className="project">
    <div className="link-to" id="project" />
    <div className="title">
      <h3>Projects</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.project}
      />
    ))}
  </div>
);

Project.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    project: PropTypes.string,
    link: PropTypes.string,
    points: PropTypes.arrayOf(PropTypes.string),
  })),
};

Project.defaultProps = {
  data: [],
};

export default Project;
