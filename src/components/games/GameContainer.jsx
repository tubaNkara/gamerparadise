import {Container, Row,} from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import {data} from "../../helpers/data"
import { useState,} from 'react';
import GameCard from './GameCard';



const GameContainer = () => {

const [search, setSearch] = useState("")

const handleChange=(t)=>{
  setSearch(t.target.value)
}


const filteredData = data.filter((item)=>item.title.toLowerCase().includes(search.trim().toLowerCase()))



  return (
    <div>
      <Form.Control
        className="search-bar"
        style={{
          backgroundColor: "antiquewhite",
          borderColor: "#007bff",
          borderRadius: "55px",
          fontFamily:"Rubik Mono One",
          fontSize:"15px",
        }}
        size="m"
        type="search"
        placeholder="Search game🎮"
        onChange={handleChange}
      />

      <Container className="p-2  game-container">
        <Row
          g-2
          xs={2}
          md={3}
          xl={4}
          className=" justify-content-center containercard"
        >
          {filteredData.map((games) => (
            <GameCard key={games.id} games={games} />
          ))}
          ;
        </Row>
      </Container>
    </div>
  );
}

export default GameContainer
