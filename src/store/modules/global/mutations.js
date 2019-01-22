const ERROR_UPDATED = (state, error, errorMsg) => {
  state.loading = false
  state.errorMsg = error;
  state.error = error;
};

const LOADING_UPDATED = (state, loading) => {
  state.loading = loading
};

const RESET_STATE = state => {
  state.loading = false
  state.errorMsg = null
  state.error = false
}

export default {
  ERROR_UPDATED,
  LOADING_UPDATED
};
