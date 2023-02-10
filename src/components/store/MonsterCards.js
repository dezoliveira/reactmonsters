import { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "../elements/Image"
import Input from "../elements/Input"
import Button from "../elements/Button"

const MonsterCards = () => {

  const [monsters, setMonsters] = useState([])
  const [isFetching, setFetching] = useState(false)

  useEffect(() => {
    fetch("https://mhw-db.com/monsters/")
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setMonsters(data)
      setFetching(true);
    })
  })

  return (
    <>
      {
        isFetching ?
          <InputBox>
            <Input 
              type={"text"}
              text={"Select a Monster: "}
            />
            <Button
              text={"Search"}
            />
          </InputBox>
        : 
        <Loading>
          <img src="https://media.tenor.com/CyHKquZt2OYAAAAC/yes-oh.gif" />
          <label>Loading...</label>
        </Loading>
      }
          
      <Container>
        {monsters.map(monster => (
          <Card>
            <div key={monster.id}>
              <CardHeader>
                <Image tag={monster.name} type={monster.elements.length ? monster.elements[0] : ''} />
              </CardHeader>
              <hr />
              <CardTitle>
                <h2> {monster.name} </h2>
              </CardTitle>
              <CardBody>
                <h5> Type: {monster.type} / Species: {monster.species} / Elements: {monster.elements.length ? monster.elements :  'none'}</h5>
                <span> Locations: <a href="/"> {monster.locations[0].name} </a> </span>
                <span> <a href="/">{monster.locations.length > 1 ? " / " + monster.locations[1].name : ''}</a></span>
                <p> {monster.description} </p>
              </CardBody>
            </div>
          </Card>
        ))}
      </Container>
    </>
  )
}

const Loading = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  label {
    font-size: 60px;
    color: #2F2F2F;
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 6rem;

  hr {
    margin: 0;
  }
`

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

const InputBox = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export default MonsterCards