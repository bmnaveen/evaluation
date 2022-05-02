
import { ADD_AUTH } from "./actions";

const init = {
  isLoggedIn:null
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
case ADD_AUTH:
  return {...store,isLoggedIn:payload}
    default:
      return store;
  }
};
