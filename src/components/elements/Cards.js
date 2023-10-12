import styled from "styled-components"

import Image from "./Image"

const Cards = ({data}) => {
  return (
    <Card key={data.id}>
      <CardHeader>
        <Image tag={data.name} type={data.elements.length ? data.elements[0] : ''} />
      </CardHeader>
      <hr />
      <CardTitle>
        <h2> {data.name} </h2>
      </CardTitle>
      <CardBody>
        <h5> 
          Type: {data.type} / Species: {data.species} / 
          Elements: {
            data.elements.length ?
            <>
              <a href="https://monsterhunterworld.wiki.fextralife.com/Elemental+Resistances" target="_blank" rel="noreferrer">
                <img alt="" 
                  src={
                    data.elements.length > 2 ? 
                      process.env.PUBLIC_URL + '/images/elements/' + data.elements[0] + '.png'
                      + process.env.PUBLIC_URL + '/images/elements/' + data.elements[1] + '.png'
                    : process.env.PUBLIC_URL + '/images/elements/' + data.elements[0] + '.png'
                  }
                />
              </a>
            </> : 'none'
          } 
        </h5>
        <span> Locations: <a href="/"> {data.locations[0].name} </a> </span>
        <span> <a href="/">{data.locations.length > 1 ? " / " + data.locations[1].name : ''}</a></span>
        <p> {data.description} </p>
      </CardBody>
    </Card>
  )
}

const Card = styled.div`
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 380px;
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

img{
  width: 24px;
  height: 24px;
  vertical-align: bottom;

  cursor: pointer;
}

h5 {
  text-align: center;
}

span {
  text-align: center;

  a{
    color: #006E51;
  }
}
`

export default Cards