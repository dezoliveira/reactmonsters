import styled from "styled-components"

const Button = ({id, text}) => {
  return (
    <Container>
      <button id={id}>
        {text}
      </button>
    </Container>
  )
}

const Container = styled.span`
  margin: 25px;

  button {
    padding: 12px 25px;
    background-color: #006E51;
    border: 2px solid #006E51;
    border-radius: 4px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
`

export default Button