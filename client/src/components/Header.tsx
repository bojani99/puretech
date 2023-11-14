import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'

const Header: React.FC = () => {
    return (
    <header>
        <Navbar bg='dark' variant='dark' expand="md" collapseOnSelect>
        <Container>
            <Navbar.Brand href='/'>
                <img src={logo} alt="PureTech" />
                PureTech
                </Navbar.Brand>
            <Navbar.Toggle id="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav className='ms-auto'>
                    <Nav.Link href='/cart' className='d-flex align-items-center gap-2'><FaShoppingCart/>Cart</Nav.Link>
                    <Nav.Link href='/login' className='d-flex align-items-center gap-2'><FaUser/>Sign In</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
)
}

export default Header