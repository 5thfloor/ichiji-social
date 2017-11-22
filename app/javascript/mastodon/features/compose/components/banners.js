import React from 'react';
import Immutable from 'immutable';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

@injectIntl
export default class Banners extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  componentWillMount () {
    const banners = [];

    // tmp
    banners.push(
      {
        id: 1,
        name: '320x50',
        image_url: 'http://placehold.it/320x50.jpg',
        link: '/favourites',
      }, {
        id: 2,
        name: '6:1',
        image_url: 'http://placehold.it/300x50.jpg',
        link: '/getting-started',
      }, {
        id: 3,
        name: '5:1',
        image_url: 'http://placehold.it/200x40.jpg',
        link: '/getting-started',
      },
    );

    this.banners = Immutable.fromJS(banners);
  }

  render () {
    // const { intl } = this.props; // i18n
    return (
      <div className='banners'>
        <ul>
          {this.banners.map(banner => (
            <li key={banner.get('name')}>
              <Link className='' to={banner.get('link')}>
                <img src={banner.get('image_url')} alt={banner.get('name')} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

};