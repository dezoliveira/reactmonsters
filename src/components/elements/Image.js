import styled from "styled-components"

const Image = ({tag}) => {
  return (
    <Container>
      <img src={
        process.env.PUBLIC_URL + `/images/monsters/${tag}.png`
      }/>
    </Container>
  )
}

const Container = styled.div`
  width: 400px;
  && img{
    width: 100%;
  }
`

export default Image