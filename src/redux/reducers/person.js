import { ADD_PERSON } from "../constant";

const initPerState = [];
export default function personReducer(perState = initPerState, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [...perState, data];
    default:
      return perState;
  }
}
