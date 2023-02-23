import { Link } from "react-router-dom"
import Button from "../elements/Button"

import styled from "styled-components"

const Hero = () => {
  return (
    <Container>
      <h1>Welcome to Hunter's Bestiary!</h1>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  gap: 50px;

  h1 {
    font-size: 60px;
    color: #96965E;
    margin: 0;
  }

  p {
    font-size: 25px;
    text-align: justify;
    color: white;
    margin: 0;
  }
`

export default Hero