import * as React from 'react'
import { graphql, PageProps, Link } from 'gatsby'

import Layout from '../components/layout'

export const Head = () => <title>Blog</title>

const BlogPage = ({ data }: PageProps<Queries.BlogPageQuery>) => {
	return (
		<Layout pageTitle="My Blog Posts">
			{data.allMdx.nodes.map(node => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.frontmatter?.slug}`}>
							{node.frontmatter?.title}
						</Link>
					</h2>
					<p>Posted: {node.frontmatter?.date}</p>
				</article>
			))}
		</Layout>
	)
}

export const query = graphql`
	query BlogPage {
		allMdx(sort: { frontmatter: { date: DESC }}) {
			nodes {
				frontmatter {
					date(formatString: "MMMM D, YYYY")
					title
					slug
				}
				id
			}
		}
	}
`

export default BlogPage