import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";
import { Loading } from "./LoadingComponent";

const RenderCard = ({ item, isLoading, errMess }) => {
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
          <CardTitle className="h6">{item.name}</CardTitle>
          {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
          <CardText>{item.description}</CardText>
        </CardBody>
      </Card>
    );
};
const Home = (props) => (
  <div className="container">
    <div className="row">
      <Breadcrumb>
        <BreadcrumbItem active>
          <Link to="/home">Home</Link>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>Menu</h3>
        <hr />
      </div>
    </div>
    <div className="row align-items-start">
      <div className="col-12 col-md m-1">
        <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.promotion} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.leader} />
      </div>
    </div>
  </div>
);
export default Home;
