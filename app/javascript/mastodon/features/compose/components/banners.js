import React from 'react';
import Immutable from 'immutable';
import Link from 'react-router-dom/Link';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import drillBanner from '../../../../images/drill_banner.png';
import hondelBanner from '../../../../images/hondel_banner.png';
import makerBanner from '../../../../images/maker_banner.png';
import ichikuraBanner from '../../../../images/ichikura_banner.png';
import ichicradioBanner from '../../../../images/ichicradio_banner.png';

@injectIntl
export default class Banners extends React.PureComponent {

  static propTypes = {
    intl: PropTypes.object.isRequired,
  };

  componentWillMount () {
    const banners = [];

    banners.push(
      {
        id: 1,
        name: 'drill',
        image_url: drillBanner,
        link: 'https://drill.5thfloor.co.jp/',
      },
      {
        id: 2,
        name: 'hondel',
        image_url: hondelBanner,
        link: 'https://hondel.jp/?utm_source=ichijisicial&utm_medium=banner&utm_campaign=info',
      },
      {
        id: 3,
        name: 'puchinoko-maker',
        image_url: makerBanner,
        link: 'https://figure.uchinokomato.me/maker/?utm_source=ichijisicial&utm_medium=banner&utm_campaign=info',
      },
      {
        id: 4,
        name: 'ichikura',
        image_url: ichikuraBanner,
        link: 'http://tomatosumisow.noor.jp/ichikura.html',
      },
      {
        id: 5,
        name: 'puchicradio',
        image_url: ichicradioBanner,
        link: 'https://complementaryparty.wixsite.com/ichiradi',
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
