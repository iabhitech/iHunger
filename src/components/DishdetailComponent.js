import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import CommentForm from "./CommentFormComponent";
import { Loading } from "./LoadingComponent";
import { FadeTransform, Fade, Stagger } from "react-animation-components";

const RenderDish = ({ dish }) => (
  <div className="col-12 col-md-5 m-1">
    <h4>Dish Detail</h4>
    <FadeTransform
      in
      transformProps={{
        exitTransform: "scale(0.5) translate(-50%)",
      }}
    >
      <Card>
        <CardImg top src={"/" + dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <h6>{dish.name}</h6>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </FadeTransform>
  </div>
);

const RenderComments = ({ comments, postComment, dishId }) => {
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          <Stagger in>
            {comments.map((comment) => (
              <Fade in key={comment.id}>
                <li className="mb-2">
                  <div>{comment.comment}</div>
                  <div>
                    --{comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", { year: "numeric", month: "short", day: "2-digit" }).format(
                      new Date(comment.date)
                    )}
                  </div>
                  <hr />
                </li>
              </Fade>
            ))}
          </Stagger>
        </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
      </div>
    );
};

const DishDetail = (props) => {
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4>{props.errMess}</h4>
        </div>
      </div>
    );
  } else if (props.dish != null)
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
          <RenderComments comments={props.comments} postComment={props.postComment} dishId={props.dish.id} />
        </div>
      </div>
    );
};

export default DishDetail;
