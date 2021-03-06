export const INCREMENT = 'INCREMENT';

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT: {
      const { count } = state;
      return {
        count: count + 1
      };
    }
    default:
      return state;
  }
}
