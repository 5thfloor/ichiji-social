import React from 'react';
import PropTypes from 'prop-types';
import Link from 'react-router-dom/Link';

class Banner extends React.PureComponent {

  static propTypes = {
    imgSrc: PropTypes.string.isRequired,
    linkUrl: PropTypes.string,
  };

  render () {
    const { imgSrc, linkUrl } = this.props;
    return (
      <Link className='drawer__banner' to={linkUrl}>
        <img src={imgSrc} />
      </Link>
    );
  }

};

export default Banner;