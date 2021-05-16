import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const RenderMenuItem = ({ dish, onClick }) => (
  <Card onClick={() => onClick(dish.id)}>
    <CardImg className="img-fluid" src={dish.image} alt={dish.name} />
    <CardImgOverlay>
      <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
  </Card>
);

const Menu = (props) => {
  if (!props.dishes) return <></>;
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
};
export default Menu;
