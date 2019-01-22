export default {
  getUrl(context, url, type) {
    axios.get(url)
      .then(response => {
        context.commit(type, response.data);
        context.commit('global/LOADING_UPDATED', false, {root: true})
      })
      .catch(error => {
        context.commit('global/ERROR_UPDATED', true, error.response.data, {root: true});
      })
  },

  postUrl(context, url, payload, type) {
    axios.post(url, payload)
      .then(response => {
        context.commit(type, response.data);
        context.commit('global/LOADING_UPDATED', false, {root: true})
      })
      .catch(error => {
        context.commit('global/ERROR_UPDATED', true, error.response.data, {root: true});
      })
  }
}
