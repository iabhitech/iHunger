import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import CommentForm from "./CommentFormComponent";

const RenderDish = ({ dish }) => (
  <div className="col-12 col-md-5 m-1">
    <h4>Dish Detail</h4>
    <Card>
      <CardImg top src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>
          <h6>{dish.name}</h6>
        </CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  </div>
);

const RenderComments = ({ comments, addComment, dishId }) => {
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-2">
              <div>{comment.comment}</div>
              <div>
                --{comment.author},{" "}
                {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(
                  new Date(comment.date)
                )}
              </div>
              <hr />
            </li>
          ))}
        </ul>
        <CommentForm dishId={dishId} addComment={addComment} />
      </div>
    );
};

const DishDetail = (props) => {
  if (!props.dish) return <></>;

  return (
    <div className="container mt-3 mb-2">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <Link to={`/menu/${props.dish.id}`}>{props.dish.name}</Link>
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        <RenderDish dish={props.dish} />
        <RenderComments comments={props.comments} addComment={props.addComment} dishId={props.dish.id} />
      </div>
    </div>
  );
};

export default DishDetail;
