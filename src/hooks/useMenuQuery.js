import React from 'react'
import { useStaticQuery, graphql } from 'gatsby' 

const useMenuQuery = () => {
  const data = useStaticQuery(graphql`
  query MyQuery {
    site {
      siteMetadata {
        title
      }
    }
    menu: wpMenu(menuItems: {}, name: {eq: "mainMenu"}) {
      menuItems {
        nodes {
          label
          url
          parentId
          id
          childItems {
            nodes {
              url
              label
              id
            }
          }
        }
      }
    }
  }
  `)

  return data
}

export default useMenuQuery
