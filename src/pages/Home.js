import { Link } from "react-router-dom"
import styled from "styled-components"

import Button from "../components/elements/Button"
import Hero from "../components/elements/Hero"

const Home = () => {
  return (
    <Container>
      <Link to="/list">
          <Button 
            text="See monster list"
          />
      </Link>
    </Container>
    
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 50px);

  background-image: url("../../public/images/backgrounds/Home_Cover.png");
`

export default Home