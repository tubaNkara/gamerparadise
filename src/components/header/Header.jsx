import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image"
import logo from "../../assets/gamer.png";

const Header = () => {
  return (
    <Container>
      <Image src={logo} width="400px" thumbnail />
      <br />
      <h1 className="my-5 title">GAMES</h1>
    </Container>
  );
}

export default Header
