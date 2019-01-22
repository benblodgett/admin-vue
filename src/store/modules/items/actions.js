import api from '@/api'

const getItems = context => {
  api.getUrl(context, 'https://jsonplaceholder.typicode.com/posts', 'ITEMS_UPDATED');
};

const getItem = (context, id) => {
  api.getUrl(context, 'https://jsonplaceholder.typicode.com/posts/' + id, 'ITEM_UPDATED');
};

const createItem = (context, payload) => {
  api.postUrl(context, 'https://jsonplaceholder.typicode.com/posts', payload, 'ITEM_UPDATED');
}

const resetItem = context => {
  context.commit('ITEM_RESET');
}

export default {
  getItems,
  getItem,
  createItem,
  resetItem
};
