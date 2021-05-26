import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment,
});

export const postComment = (dishId, rating, author, comment)=>(dispatch) => {
  const newComment = {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment,
  }
  newComment.date = new Date().toISOString();
  return fetch(baseUrl+'comments',{
    method: 'POST',
    body: JSON.stringify(newComment),
    headers:{
      'Content-Type':'application/json'
    },
    credentials: 'same-origin'
  })
  .then(
    (response) => {
      if (response.ok) return response;
      else {
        let error = new Error("Error: " + response.status + ":" + response.statusText);
        error.response = response;
        throw error;
      }
    },
    (errorMess) => {
      throw new Error(errorMess.message);
    }
  )
  .then((response) => response.json())
  .then(response => dispatch(addComment(response)))
  .catch((error) => {console.log('Post Comments ',error.message)
    alert("Your comment could not be posted\nError: "+error.message)
  });
};

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  //fetch from server
  return fetch(baseUrl + "dishes")
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          let error = new Error("Error: " + response.status + ":" + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (errorMess) => {
        throw new Error(errorMess.message);
      }
    )
    .then((response) => response.json())
    .then((dishes) => dispatch(addDishes(dishes)))
    .catch((error) => dispatch(dishesFailed(error.message)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMessage) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMessage,
});

export const addDishes = (dishes) => ({
  type: ActionTypes.ADD_DISHES,
  payload: dishes,
});

export const fetchComments = () => (dispatch) => {
  //fetch from server
  return fetch(baseUrl + "comments")
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          let error = new Error("Error: " + response.status + ":" + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (errorMess) => {
        throw new Error(errorMess.message);
      }
    )
    .then((response) => response.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((error) => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errMessage) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMessage,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchPromos = () => (dispatch) => {
  dispatch(promosLoading(true));

  //fetch from server
  return fetch(baseUrl + "promotions")
    .then(
      (response) => {
        if (response.ok) return response;
        else {
          let error = new Error("Error: " + response.status + ":" + response.statusText);
          error.response = response;
          throw error;
        }
      },
      (errorMess) => {
        throw new Error(errorMess.message);
      }
    )
    .then((response) => response.json())
    .then((promos) => dispatch(addPromos(promos)))
    .catch((error) => dispatch(promosFailed(error.message)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = (errMessage) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMessage,
});

export const addPromos = (promos) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promos,
});
