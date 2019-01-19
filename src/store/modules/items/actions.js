import { fetchItems } from '@/api/items';

const getItems = context => {
  fetchItems
    .then(response => {
      context.commit('ITEMS_UPDATED', response);
    })
    .catch(error => {
      // eslint-disable-next-line
      console.log(error);
    });
};

export default {
  getItems
};
