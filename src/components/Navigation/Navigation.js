import React from 'react'
import { Link } from 'gatsby'
import { Wrapper } from '../Header/Header.styles' 

const Navigation = ({menu}) => {
  return (
    <Wrapper>
      <ul>
        { 
        menu.map((mainItem) => !mainItem.parentId ? (
          <li key={mainItem.id}>
            <Link to={mainItem.url}>
              {mainItem.label}
            </Link>
          </li>
        ) : null)
        }
      </ul>
    </Wrapper>
  )
}

export default Navigation
