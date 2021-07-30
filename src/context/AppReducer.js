const AppReducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        watchlist: [action.payload, ...state.watchlist],
      };
    case "REMOVE_MOVIE_FROM_WATCHLIST":
      return {
        watchlist: state.watchlist.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default AppReducer;