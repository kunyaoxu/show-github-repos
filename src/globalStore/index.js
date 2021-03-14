export const initialState = {
  repos: [],
  username: 'kunyaoxu',
  page: 0,
  isEnd: false,
};

/**
 * @typedef {typeof initialState} IState
 */

/**
 * @param {IState} state
 * @param {(state: IState) => IState} func
 * @returns {IState}
 */
export const reducer = (state, func) => {
  if (typeof func === 'function') {
    return func(state);
  } else {
    throw new Error('not a function');
  }
};

/**
 * @returns {(state: IState) => IState}
 */
export const incrementPage = () => {
  return (state) => {
    return { ...state, page: state.page + 1 };
  };
};

/**
 * @returns {(state: IState) => IState}
 */
export const appendReposData = ({ appendRepos, page }) => {
  return (state) => {
    return { ...state, repos: [...state.repos, ...appendRepos], page };
  };
};

/**
 * @returns {(state: IState) => IState}
 */
export const clearReposData = () => {
  return (state) => {
    return { ...state, repos: [] };
  };
};
