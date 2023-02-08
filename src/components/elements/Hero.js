import { Link } from "react-router-dom"
import Button from "../elements/Button"

import styled from "styled-components"

const Hero = () => {
  return (
    <Container>
      <h1>Welcome to Monster Hunter World's Briefing</h1>
      <p>
        If you're a hunter, you are in the right place!<br/>
        Here you can see all the monster's from Monster Hunter World<br/>
        Dont waste your time dying everytime to a monster, check it out our list!
      </p>
      <Link to="/list">
        <Button
          text="See monsters list"
        />
      </Link>
    </Container>
  )
}

const Container = styled.div`
  padding: 100px 0 25px 0;

  h1 {
    font-size: 60px;

  }

  p {
    font-size: 25px;
    text-align: justify;
  }
`

export default Hero