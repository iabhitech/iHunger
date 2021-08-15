import { Component } from "react";
import {
  Button,
  Collapse,
  Form,
  FormGroup,
  Input,
  Jumbotron,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  toggleModal() {
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      "Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember me: " +
        this.remember.checked
    );
    event.preventDefault();
  }

  render() {
    return (
      <>
        <Navbar dark expand="sm">
          <div className="container">
            <NavbarBrand className="mr-auto" link="/" tabIndex="1">
              <img src="/assets/img/logo2.png" width="45" alt="Restaurant iHunger" style={{ filter: "invert(1)" }} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />

            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <Button outline onClick={this.toggleModal} color="white">
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Welcome to iHunger</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create a unique fusion expirence. Our
                  lipsmacking creations will tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input type="text" id="username" innerRef={(input) => (this.username = input)} name="username" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" innerRef={(input) => (this.password = input)} name="password" />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" name="remeber" innerRef={(input) => (this.remember = input)} />
                  Remember me
                </Label>
              </FormGroup>
              <div className="text-right">
                <Button type="submit" value="submit" color="primary">
                  Login
                </Button>
              </div>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
export default Header;
