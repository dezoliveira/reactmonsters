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
        : ''
      }
          
      <Container>
        {monsters.map(monster => (
          <Card>
            <div key={monster.id}>
              <h2> {monster.name} </h2>
              <h5> Type: {monster.type} / Species: {monster.species} / Elements: {monster.elements.length ? monster.elements :  'none'}</h5>
              <span> Locations: <a href="/"> {monster.locations[0].name} </a> </span>
              <span> <a href="/">{monster.locations.length > 1 ? " / " + monster.locations[1].name : ''}</a></span>
              <p> {monster.description} </p>
              <Image tag={monster.name} />
            </div>
          </Card>
        ))}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 4rem;
`

const Card = styled.div`
  border:4px solid #006E51;
  padding: 40px;
`

const InputBox = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export default MonsterCards