import * as ActionTypes from "./ActionTypes";

export const Comments = (
  state = {
    errMess: null,
    comments: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      const comments = action.payload || [];
      return { ...state, errMess: null, comments: comments };
    case ActionTypes.COMMENTS_FAILED:
      return { ...state, errMess: action.payload, comments: [] };

    case ActionTypes.ADD_COMMENT:
      return { ...state, comments: Object.assign(state.comments, action.payload) };
    default:
      return state;
  }
};
