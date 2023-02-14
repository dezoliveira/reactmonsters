import styled from "styled-components"

import Image from "./Image"

const CardList = ({monster}) => {
  return (
    <>
      <Card key={monster.key}>
        <CardHeader>
          <Image tag={monster.name} type={monster.elements ? monster.elements[0] : ''} />
        </CardHeader>
        <hr />
        <CardTitle>
          <h2> {monster.name} </h2>
        </CardTitle>
        <CardBody>
          <h5> Type: {monster.type} / Species: {monster.species} / Elements: {monster.elements ? monster.elements :  'none'}</h5>
          <span> Locations: <a href="/"> {monster.locations ? monster.locations[0].name : ''} </a> </span>
          <span> <a href="/">{monster.locations.length > 1 ? " / " + monster.locations[1].name : ''}</a></span>
          <p> {monster.description} </p>
        </CardBody>
      </Card>
    </>
  )
}

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;

  :hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transform: translateY(-15px);
  }
`

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #006E51;
  border-radius: 10px 10px 0 0;
`

const CardTitle = styled.div`
  text-align: center;
  font-size: 25px;
`

const CardBody = styled.div`
  padding: 0 15px;
`

export default CardList