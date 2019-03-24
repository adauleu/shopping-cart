export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

export function addItem(name) {
  return { type: ADD_ITEM, name };
}

export function removeItem(name) {
  return { type: REMOVE_ITEM, name };
}
