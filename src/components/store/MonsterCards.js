import { useState, useEffect } from "react"

const MonsterCards = () => {

  const [monsters, setMonsters] = useState([])

  useEffect(() => {
    fetch("https://mhw-db.com/monsters")
    .then((resp) => resp.json())
    .then((data) => {
      setMonsters(data)
    })
  })

  return (
    <div>
      {monsters.map(monster => (
        <p> {monster.name} </p>
      ))}
    </div>
  )
}

export default MonsterCards