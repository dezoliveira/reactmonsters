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
    <h1>
     {
      monsters.map((x) => x.name)
     }
    </h1>
  )
}

export default MonsterCards