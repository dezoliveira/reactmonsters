import { useState, useEffect } from "react"

import Image from "../elements/Image"

import styled from "styled-components"

const MonsterCards = () => {

  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://mhw-db.com/monsters/")
    .then((resp) => resp.json())
    .then((data) => {
      setMonsters(data)
    })
  })

  console.log(monsters)

  return (
    <Card>
      {monsters.map(monster => (
        <div key={monster.id}>
          <h2> {monster.name} </h2>
          <h5> Type: {monster.type} / Species: {monster.species} / Elements: {monster.elements.length ? monster.elements :  'none'}</h5>
          <span> Locations: <a href="/"> {monster.locations[0].name} </a> </span>
          <span> <a href="/">{monster.locations.length > 1 ? " / " + monster.locations[1].name : ''}</a></span>
          <p> {monster.description} </p>
          <Image tag={monster.name} />
        </div>
      ))}
    </Card>
  )
}

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  grid-gap: 4rem;
`

export default MonsterCards