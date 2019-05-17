import React from 'react'
import { connect } from 'redaction'

import PageHeadline from 'components/PageHeadline/PageHeadline'
import SubTitle from 'components/PageHeadline/SubTitle/SubTitle'
import { FormattedMessage } from 'react-intl'


const About = ({ address }) => (
  <section style={{ height: '100%' }}>
    <iframe width="100%" height="750px" style={{ marginTop: "30px" }} title="About AtomicSwapWallet.io" src={` https://medium.com/@cointorox/atomicswapwallet-io-your-coins-your-keys-cf2530bceb0/`} frameBorder="0" />
  </section>
)

export default connect(state => ({
  address: state.user.ethData.address,
}))(About)
