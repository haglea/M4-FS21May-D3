import { Navbar, Nav} from 'react-bootstrap'

const MyNavBar = (props) => (
<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">{props.title}</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" style={{color: "black"}}>About</Nav.Link>
      <Nav.Link href="#" style={{color: "black"}}>Browse</Nav.Link>     
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default MyNavBar