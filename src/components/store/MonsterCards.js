import { useState, useEffect } from "react"
import styled from "styled-components"
import Image from "../elements/Image"
import Input from "../elements/Input"
import Cards from "../elements/Cards"
import CardsList from "../elements/CardsList"

const MonsterCards = () => {
  const [monsters, setMonsters] = useState([])
  const [isFetching, setFetching] = useState(false)
  const [inputText, setInputText] = useState([])

  useEffect(() => {
    fetch(`https://mhw-db.com/monsters/${inputText}`)
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data)
      setMonsters(data)
      setFetching(true);
    })
  }, [inputText])

  const handleChange = (e) => {
      let monster = e.target.value
      let filter = null
      if (monsters.length){
        filter = 
          monsters.filter(
            x => x.name.toLowerCase() === monster.toLowerCase()
          )
      }
      setInputText(
        filter !== null ? 
          filter[0].id 
        : e.target.value
      )
  }
  
  return (
    <>
      {
        isFetching ?
          <InputBox>
            <Input 
              type={"text"}
              text={"Select a Monster: "}
              onChange={handleChange}
            />
          </InputBox>
        : 
        <Loading>
          <img src="https://media.tenor.com/CyHKquZt2OYAAAAC/yes-oh.gif" />
          <label>Loading...</label>
        </Loading>
      }

      {
        monsters.length ?
          <>
            <Container>
              {
                monsters.map(monster => (
                  <CardsList
                  data={monster}>
                    
                  </CardsList>
                ))
              }
            </Container>
          </> 
          : 
          isFetching ?
            <Container2>
              <Cards
                data={monsters}
              >
                
              </Cards>
            </Container2>
          : <></>
      }
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
  grid-auto-rows: auto;
  grid-gap: 6rem;

  grid-template-columns: repeat(4, 1fr);

  hr {
    margin: 0;
  }
`

const Container2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  hr {
    margin: 0;
  }
`

const InputBox = styled.div`
  text-align: center;
  margin-bottom: 80px;
`

export default MonsterCards