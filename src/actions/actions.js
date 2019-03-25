export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function addItem(id) {
  return { type: ADD_ITEM, id };
}

export function removeItem(id) {
  return { type: REMOVE_ITEM, id };
}
