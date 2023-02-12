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
  background-image: url("https://images3.alphacoders.com/105/1054347.jpg");
  background-size: cover;
  height: calc(100vh - 50px);
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.5;
`

export default Home