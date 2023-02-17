import logoProv from '../../Imagens/logo512.png';
import imgPerfil from '../../Imagens/DSC_1978.JPG'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function BarraPerfil() {
    return (
        <Navbar bg="dark">
            <Container fluid>
                <img src={logoProv} width="30" className="me-1" alt="Marca" />
                <Navbar.Brand className="text-white">Home Mate</Navbar.Brand>
                <Nav
                    className="ms-auto my-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Item className='d-flex align-items-center'>Lucas Henrique Simon</Nav.Item>
                    <Nav.Item className="ms-1"><img src={imgPerfil} width="30" alt="Foto de perfil" /></Nav.Item>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BarraPerfil;