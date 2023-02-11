import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Navbar = () => {
  return(
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/docs">Docs</Link>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #006E51;
  color: #f0f0f0;
  height: 50px;

  a {
    list-style: none;
    text-decoration: none;
    color: inherit;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 15px;
    text-decoration: none;
    list-style: none;
    font-size: 16px;
  }

  li {
    transition: 0.3s;

    :hover {
      font-weight: bold;
      font-size: 18px;
    }
  }
`

export default Navbar