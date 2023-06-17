const ThemeReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_MODE":
      return {
        ...state,
        mode: action.mode,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    default:
      return state;
  }
};

export default ThemeReducer;
