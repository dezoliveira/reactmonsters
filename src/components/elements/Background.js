import image from "../../../src/images/Home_Cover.png"
import styled from "styled-components"

const Background = () => {
  return (
    <Cover />
  )
}

const Cover = styled.html`
  background-image: url(${image});
  height: 100vh;
`

export default Background