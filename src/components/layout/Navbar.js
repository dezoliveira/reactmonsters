import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  return(
    <Container>
      <span>
        <img src={process.env.PUBLIC_URL + "/images/backgrounds/Logo.png"} alt='logo' />
        <h1>Monster Hunter</h1>
      </span>
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
  justify-content: space-between;
  padding: 0 25px;
  background-color: #006E51;
  color: #f0f0f0;
  height: 60px;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }

  img {
    width: 50px;
  }

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
    font-size: 20px;

    :hover {
      font-weight: bold;
      font-size: 25px;
    }
  }
`

export default Navbar