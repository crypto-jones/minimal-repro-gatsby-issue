import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    {/* <StaticQuery
      query={graphql`
        query {
          externalGreenhouse {
            departments {
              id: alternative_id
              parent_id
              jobs {
                title
                absolute_url
                location {
                  name
                }
              }
            }
          }
        }
      `}
      render={({ externalGreenhouse: { departments } }) => (
        <div>hello world</div>
      )}
    /> */}
  </Layout>
)

export default IndexPage
