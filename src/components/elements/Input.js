import styled from "styled-components"

const Input = ({type, text}) => {
  return (
    <Container>
      <div>
        <label>{text} </label>
        <input type={type}/>
      </div>
    </Container>
  )
}

export default Input

const Container = styled.div`
  text-align: center;
  margin-bottom: 80px;

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