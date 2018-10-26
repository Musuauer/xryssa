import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>

    <Link to='/Projects'>Projects</Link>
    <Link to='/Info'>Info</Link>
    <Link to='/Contact'>Contact</Link>

  </Layout>
)

export default IndexPage
