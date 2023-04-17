import styled from "styled-components"

import Hero from "../components/elements/Hero"

const Home = () => {
  return (
    <Container>
      <Image />
      <Hero />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 50px);
  width: 100%;
`

const Image = styled.img`
  background-size: cover;
  height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
  z-index: -1;
  
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url("https://images5.alphacoders.com/634/634437.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default Home