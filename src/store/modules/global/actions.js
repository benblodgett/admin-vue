const updateLoading = (context, loading) => {
  context.commit('LOADING_UPDATED', loading)
}

const updateError = (context, error, errorMsg) => {
  context.commit('ERROR_UPDATED', error, errorMsg)
}

export default {
  updateLoading,
  updateError
};
