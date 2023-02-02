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
  margin: 50px;
`

export default List