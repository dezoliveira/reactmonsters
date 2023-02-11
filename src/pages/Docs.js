import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Docs = () => {
  return (
    <Container>
      <h2>Public Utility:</h2>
      <a target="_blank" href="https://monsterhunterworld.wiki.fextralife.com/monster+hunter+world+wiki">
        <span>
          Monster Hunter World Wiki
          <FontAwesomeIcon icon={faLink}/>  
        </span>
      </a>
      <a target="_blank" href="https://www.youtube.com/watch?v=EvxfRLEiLFI&list=PLyT5NcCVqdX_0dIZPd9BxBUxUGHJi8_yd">
        <span>
          Weapon Guide
          <FontAwesomeIcon icon={faLink}/>
        </span>
      </a>
      <img src="https://media.tenor.com/F740l5lE0IIAAAAi/monster-hunter-thumbs-up.gif"/>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 25px;

  a {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
  }

  svg {
    margin: 0 5px;
    color: #006E51;
  }
`

export default Docs