import { Component } from "react";
import { Jumbotron, Navbar, NavbarBrand } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar dark>
          <div className="container">
            <NavbarBrand link="/" tabIndex="1">
              Ristorante Con Fusion
            </NavbarBrand>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-6">
                <h1>Ristorante Con Fusion</h1>
                <p>
                  We take inspiration from the World's best cuisines, and create a unique fusion expirence. Our
                  lipsmacking creations will tickle your culinary senses!
                </p>
              </div>
            </div>
          </div>
        </Jumbotron>
      </>
    );
  }
}
export default Header;