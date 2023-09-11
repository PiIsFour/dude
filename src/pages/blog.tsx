import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

import Layout from '../components/layout'

export const Head = () => <title>Home Page</title>

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
	return (
		<Layout pageTitle="My Blog Posts">
			<ul>
				{data.allFile.nodes.map(node => (
					<li key={node.name}>
						{node.name}
					</li>
				))}
			</ul>
		</Layout>
	)
}

export const query = graphql`
	query BlogPage {
		allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
			nodes {
				name
			}
		}
	}
`

export default BlogPage