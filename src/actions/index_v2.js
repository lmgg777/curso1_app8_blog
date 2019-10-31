import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

// Opción de solución con lodash _.memoize()
//No es la más optima pues solo funciona con los mismos datos
//en caso de actualizar los usuarios ya no funcionaria

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder("/posts");
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

// =actionCreator fetchUser= como función
// export const fetchUser = function(id) {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder(`/users/${id}`);
//     dispatch({ type: "FETCH_USER", payload: response.data });
//   };
// };

// =actionCreator fetchUser=
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// };

// =actionCreator Refactorizado=
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder(`/users/${id}`);
  dispatch({ type: "FETCH_USER", payload: response.data });
});
