import MonsterCards from "../components/store/MonsterCards"
import styled from "styled-components"

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Container>
        <MonsterCards />
      </Container>
    </>
  )
}

const Container = styled.div`
  max-width: 1vh;
  margin: 50px;
`

export default Home