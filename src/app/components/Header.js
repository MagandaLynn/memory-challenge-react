import {Container, Nav, Navbar, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky='top' expand='xs' className="navbar-bg">
            <Container className='mr-auto'>
                  <Nav className='ms-auto' navbar>
                      <NavItem>
                          <NavLink className='nav-link px-1' to='/'>
                            <i className='fa fa-home fa-lg' />
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className='nav-link px-1' to='/create'>
                            Create
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className='nav-link px-1' to='/memorize'>
                            Memorize
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className='nav-link px-1' to='/games'>
                            Games
                          </NavLink>
                      </NavItem>
                  </Nav>
            </Container>
            <Container className='ml-auto'>
                <Nav className='flex-row-reverse' navbar>
                    
                <NavItem>
                        <NavLink className='nav-link px-1' to="/">
                            <i className="fa fa-lg fa-cog"></i>
                        </NavLink>
                    </NavItem>
                    
                    <NavItem>
                        <NavLink className='nav-link px-1' to="/">
                            <i className="fa fa-lg fa-question-circle"></i>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link px-1' to="/">
                            <i className="fa fa-lg fa-bar-chart"></i>
                        </NavLink>
                    </NavItem>
                    
                </Nav>
            </Container>
        </Navbar>
        );
};

export default Header;