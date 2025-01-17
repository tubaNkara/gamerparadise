import Container from "react-bootstrap/Container";
import Header from "./components/header/Header";
import GameContainer from "./components/games/GameContainer";

function App() {
  return (
    <Container className="text-center mt-5">
      <Header />
      <GameContainer />
    </Container>
  );
}

export default App;
