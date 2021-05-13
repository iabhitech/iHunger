import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>
            <h6>{dish.name}</h6>
          </CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  renderComments(comments) {
    const dishComments = comments.map((comment) => {
      let date = new Date(comment.date);
      return (
        <li key={comment.id} className="mb-2">
          <div>{comment.comment}</div>
          <div>
            --{comment.author}, {date.toLocaleString()}
          </div>
          <hr />
        </li>
      );
    });
    return dishComments;
  }
  render() {
    if (this.props.dish == null) {
      return <></>;
    }
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">{this.renderDish(this.props.dish)}</div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">{this.renderComments(this.props.dish.comments)}</ul>
        </div>
      </div>
    );
  }
}
export default DishDetail;
