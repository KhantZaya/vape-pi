import { Navbar, Container, Nav } from "react-bootstrap";
import '../index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faBars} from "@fortawesome/free-solid-svg-icons";
import NavLogo from '../assets/logo.svg'

function NavBar () {
  return (
    <Navbar bg="white" variant="dark" className="navbar ">
      <Container className="d-flex">
        <Navbar.Brand href="#home" className="" style={{width : '150px'}}>
          <img src={NavLogo} alt=""  style={{color : 'black'}} className="w-100"/>
        </Navbar.Brand>
        <Nav className="">
          <Nav.Link href="#home" className="mx-1">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#000000",}} />
          </Nav.Link>
          <Nav.Link href="#features" className="mx-1">
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000",}} />
          </Nav.Link>
          <Nav.Link href="#pricing" className="mx-1">
            <FontAwesomeIcon icon={faBars} style={{color: "#000000",}} />
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
