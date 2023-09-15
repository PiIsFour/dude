import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'

export const Head = ({ data }: PageProps<Queries.BlogPagesQuery>) => <title>{data.mdx?.frontmatter?.title ?? 'Blog'}</title>

const BlogPost = ({ data, children }: PageProps<Queries.BlogPagesQuery>) => {
  return (
    <Layout pageTitle={data.mdx?.frontmatter?.title ?? 'Blog'}>
      <p>{data.mdx?.frontmatter?.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query BlogPages ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default BlogPost