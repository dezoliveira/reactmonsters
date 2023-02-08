import styled from "styled-components"

const Image = ({tag}) => {
  return (
    <Container>
      <img
      alt={
        tag + "_img"
      } 
      src={
        process.env.PUBLIC_URL 
        + `/images/monsters/${tag}.png`
      }/>
    </Container>
  )
}

const Container = styled.div`
  background-color: aqua;

  border-radius: 50%;
  img{
    width: 200px;
    min-height: 200px;
    max-height: 200px;
    padding: 10px;
  }
`

export default Image