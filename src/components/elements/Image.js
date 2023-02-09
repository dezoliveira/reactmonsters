import styled from "styled-components"

const Image = ({tag, type}) => {
  return (
    <Container type={type}>
      <img
        alt={
          tag + "_img"
        } 
        src={
          process.env.PUBLIC_URL 
          + `/images/monsters/${tag}.png`
        }
      />
    </Container>
  )
}

const Container = styled.div`
  background-color: 
    ${props => 
      (props.type === `` ? `#d3d3d3` : ``) ||
      (props.type === `fire` ? `#FF4802` : ``) ||
      (props.type === `thunder` ? `#FEFD03` : ``) ||
      (props.type === `ice` ? `#ADCEF7` : ``) ||
      (props.type === `dragon` ? `#6A72B4` : ``) || 
      (props.type === `water` ? `#93EBFF` : ``)
    };

  border-radius: 50%;
  img{
    width: 200px;
    min-height: 200px;
    max-height: 200px;
    padding: 10px;
  }
`

export default Image