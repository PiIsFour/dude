import * as React from 'react'

import Layout from '../components/layout'

export const Head = () => <title>Home Page</title>

const IndexPage = () => {
	return <Layout pageTitle="Home Page">
		<p>I'm making this by following the Gatsby Tutorial.</p>
	</Layout>
}

export default IndexPage
