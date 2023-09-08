import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/layout'

export const Head = () => <title>Home Page</title>

const IndexPage = () => {
	return <Layout pageTitle="Home Page">
		<p>I'm making this by following the Gatsby Tutorial.</p>
		<StaticImage
			alt="random image of a japanese city at night"
			src="https://source.unsplash.com/random/500/?japan,city,night"
		/>
	</Layout>
}

export default IndexPage
