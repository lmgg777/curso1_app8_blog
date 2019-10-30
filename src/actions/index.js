import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// version 1 fetchPostsAndUsers()
// export const fetchPostsAndUsers = () => async (dispatch, getState) => {
//     console.log("Comienza proceso de traer posts");
//     //Consigue todos los posts del actionCreator fetchPosts
//     await dispatch(fetchPosts());
//     console.log("Resultado con posts", getState().posts);
//     //Consigue los ids unicos de los usuarios 1 a 10
//     const userIds = _.uniq(_.map(getState().posts, "userId"));
//     console.log(userIds);
//     //Filtra los posts con ids unicos de los usuarios haciendo uso del actionCreator fetchUser
//     userIds.forEach(id => dispatch(fetchUser(id)));
// }

// version 2 fetchPostsAndUsers()
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
  .map("userId")
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value();
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
};