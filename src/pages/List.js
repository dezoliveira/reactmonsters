import styled from "styled-components"

import MonsterCards from "../components/store/MonsterCards"

const List = () => {
  return (
    <>    
      <h1>List</h1>
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

export default List