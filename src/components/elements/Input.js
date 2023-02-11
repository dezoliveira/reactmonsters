import styled from "styled-components"

const Input = ({type, text}) => {
  return (
    <Container>
      <label>{text} </label>
      <input type={type}/>
    </Container>
  )
}

export default Input

const Container = styled.span`
  text-align: center;
  margin-bottom: 80px;
  margin: 0 30px 80px 20px;

  label {
    font-size: 20px;
  }

  input{
    width: 25%;
    box-sizing: border-box;
    border: 2px solid #006E51;
    border-radius: 4px;
    font-size: 16px;
    padding: 12px 20px 12px 40px;
  }
`