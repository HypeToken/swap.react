import React from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'

import CSSModules from 'react-css-modules'
import styles from './VideoAndFeatures.scss'


const VideoAndFeatures = (props) => (
  <div styleName="VidNdFeatures">
    {/* <h3 styleName="VidNdFeatures__title">
      <FormattedMessage
        id="partialVideoAndFeaturesTitle"
        defaultMessage="The {purplefastest} cross-chain Atomic Swap exchange"
        values={{
          purplefastest: (
            <span className="purple">
              <FormattedMessage
                id="partialVideoAndFeaturesTitlePur"
                defaultMessage="fastest"
              />
            </span>
          ),
        }}
      />
    </h3> */}
    <div styleName="VidNdFeatures__container">
      <div styleName="VidNdFeatures__item VidNdFeatures__item_features">
        <ul>
          <li><FormattedMessage id="partialVideoAndFeatures0" defaultMessage="Based on Atomic Swap technology" /></li>
          <li><FormattedMessage id="partialVideoAndFeatures1" defaultMessage="Exchange only takes 2 minutes" /></li>
          <li><FormattedMessage id="partialVideoAndFeatures2" defaultMessage="Supports LTC, BTC, BCH, ETH, USDT, ERC-20 tokens" /></li>
          <li><FormattedMessage id="partialVideoAndFeatures3" defaultMessage="Can be deployed on any website as an exchange service" /></li>
        </ul>
      </div>
      <div styleName="VidNdFeatures__item VidNdFeatures__item_video">
        <iframe
          title=" AtomicSwapWallet.io preview"
          width="100%"
          height="300"
          src={props.intl.formatMessage({ id: 'VidLinkFrame', defaultMessage: 'https://www.youtube.com/embed/Jhrb7xOT_7s' })}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)

export default injectIntl(CSSModules(VideoAndFeatures, styles, { allowMultiple: true }))
