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
        name: 'uchinoko',
        image_url: 'http://placehold.it/320x50.jpg',
        link: 'http://uchinokomato.me',
      }, {
        id: 2,
        name: 'puchinoko',
        image_url: 'http://placehold.it/300x50.jpg',
        link: 'http://figure.uchinokomato.me/alpha',
      }, {
        id: 3,
        name: 'hondel',
        image_url: 'http://placehold.it/200x40.jpg',
        link: 'http://hondel.jp',
      },
    );

    this.banners = Immutable.fromJS(banners);
  }

  render () {
    // const { intl } = this.props; // i18n
    return (
      <div className='drawer__banners'>
        <ul>
          {this.banners.map(banner => (
            <li className='drawer__banner' key={banner.get('name')}>
              <a href={banner.get('link')} target='_blank'>
                <img src={banner.get('image_url')} alt={banner.get('name')} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

};