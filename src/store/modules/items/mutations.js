const ITEMS_UPDATED = (state, items) => {
  state.items = items;
};

const ITEM_UPDATED = (state, item) => {
  state.item = item
}

const ITEM_RESET = (state) => {
  state.item = null
}

export default {
  ITEMS_UPDATED,
  ITEM_UPDATED,
  ITEM_RESET
};
