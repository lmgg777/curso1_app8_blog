import jsonPlaceholder from "../apis/jsonPlaceholder";

// =actionCreator fetchPosts=
// export const fetchPosts = () => {
//   return async function(dispatch, getState) {
//     const response = await jsonPlaceholder("/posts");
//     dispatch({ type: "FETCH_POSTS", payload: response });
//   };
// };

// =actionCreator fetchPosts Refactorizado=
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};