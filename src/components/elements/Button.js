import styled from "styled-components"

const Button = ({id, text, value}) => {
  return (
    <Container>
      <button 
        id={id}
      >
        {text}
      </button>
    </Container>
  )
}

const Container = styled.span`
  button {
    padding: 12px 25px;
    background-color: #006E51;
    border: 2px solid #006E51;
    border-radius: 4px;
    color: #fff;
    font-size: 17px;
    cursor: pointer;

    :hover {
      background-color: #00805E;
      border-color: #00805E;
    }
  }
`

export default Button